\connect backend

/* function: user_full_name(user): text */
create function website.user_full_name(u website.user) returns text as $$
  select u.first_name || ' ' || u.last_name
$$ language sql stable;

comment on function website.user_full_name(website.user) is 'A user’s full name which is a concatenation of their first and last name.';

/* function: register_user(fist_name, last_name, email, is_admin, password): user */
create function website.register_user(
  first_name text,
  last_name text,
  email text,
  password text
) returns website.user as $$
declare
  new_user website.user;
begin
  insert into website.user (first_name, last_name) values
    (first_name, last_name)
    returning * into new_user;

  insert into website_private.user_account (user_id, email, password_hash) values
    (new_user.id, email, crypt(password, gen_salt('bf')));

  return new_user;
end;
$$ language plpgsql strict security definer;

comment on function website.register_user(text, text, text, text) is 'Registers a single user and creates an account in our platform.';

/* function: authenticate_user(email, password): (role, id, timestamp) */
create function website.authenticate_user(
  email text, password text
  ) returns website.jwt_token as $$
declare
  account website_private.user_account;
begin
  select a.* into account
  from website_private.user_account as a
  where a.email = $1;

  if account.password_hash = crypt(password, account.password_hash) then
    return ('user_login', account.user_id, account.email, extract(epoch from (now() + interval '1 day')))::website.jwt_token;
  else
    return null;
  end if;
end;
$$ language plpgsql strict security definer;

comment on function website.authenticate_user(text, text) is 'Authenticates a user and returns a JWT token if the user is valid.';

/* function: current_user() */
create function website.current_user() returns website.user as $$
  select *
  from website.user
  where id = nullif(current_setting('jwt.claims.user_id', true), '')::uuid
$$ language sql stable;

comment on function website.current_user() is 'Gets the user who was identified by our JWT.';

-- Grant access to the functions
grant execute on function website.user_full_name(website.user) to anonymous_login, user_login;
grant execute on function website.authenticate_user(text, text) to anonymous_login, user_login;
grant execute on function website.current_user() to anonymous_login, user_login;

grant execute on function website.register_user(text, text, text, text) to anonymous_login;
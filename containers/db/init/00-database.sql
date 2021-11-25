\connect backend;

CREATE SCHEMA website;
CREATE SCHEMA website_private;

/* enable PGCRYPTO */
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

/* user table in website schema*/
CREATE TABLE website.user (
    id uuid primary key default gen_random_uuid(),
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

comment on table website.user is 'A user.';
comment on column website.user.id is 'The primary unique identifier for the user.';
comment on column website.user.first_name is 'The user’s first name.';
comment on column website.user.last_name is 'The user’s last name.';
comment on column website.user.created_at is 'The time this user was created.';

/* site_config table in website schema*/
CREATE TABLE website.site_config (
    id SERIAL PRIMARY KEY,
    title TEXT,
    url TEXT,
    data JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    owner_id uuid NOT NULL REFERENCES website.user(id)
);

comment on table website.site_config is 'Website configuration data.';
comment on column website.site_config.id is 'The primary unique identifier for the website.';
comment on column website.site_config.title is 'The website’s title.';
comment on column website.site_config.url is 'The website’s url.';
comment on column website.site_config.data is 'The website’s jsonb object data.';
comment on column website.site_config.created_at is 'The time this website was created.';

/* user_account table in website_private schema */
create table website_private.user_account (
    user_id uuid PRIMARY KEY NOT NULL REFERENCES website.user(id) on delete cascade,
    email TEXT NOT NULL UNIQUE CHECK (email ~* '^.+@.+\..+$'),
    password_hash TEXT NOT NULL
);

comment on table website_private.user_account is 'Private information about a user’s account.';
comment on column website_private.user_account.user_id is 'The primary unique identifier for the account.';
comment on column website_private.user_account.email is 'The email address of the user.';
comment on column website_private.user_account.password_hash is 'An opaque hash of the user’s password.';

/* FUNCTIONS */

/* function: user_full_name(user): text */
create function website.user_full_name(u website.user) returns text as $$
  select u.first_name || ' ' || u.last_name
$$ language sql stable;

comment on function website.user_full_name(website.user) is 'A user’s full name which is a concatenation of their first and last name.';

/* function: register_user(fist_name, last_name, email, password): user */
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

/* type: jwt_token */
create type website.jwt_token as (
  role text,
  user_id uuid,
  expires_at bigint
);

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
    return ('website_user', account.user_id, extract(epoch from (now() + interval '1 day')))::website.jwt_token;
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
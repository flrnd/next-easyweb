\connect backend;

CREATE SCHEMA backend;
CREATE SCHEMA backend_private;

/* enable PGCRYPTO */
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

/*Create user table in backend schema*/
CREATE TABLE backend.user (
    id uuid primary key default gen_random_uuid(),
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

comment on table backend.user is 'A user.';
comment on column backend.user.id is 'The primary unique identifier for the user.';
comment on column backend.user.first_name is 'The user’s first name.';
comment on column backend.user.last_name is 'The user’s last name.';
comment on column backend.user.created_at is 'The time this user was created.';

/* Create post table in backend schema*/
CREATE TABLE backend.website (
    id SERIAL PRIMARY KEY,
    title TEXT,
    url TEXT,
    data JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    owner_id uuid NOT NULL REFERENCES backend.user(id)
);

comment on table backend.website is 'A user website.';
comment on column backend.website.id is 'The primary unique identifier for the website.';
comment on column backend.website.title is 'The website’s title.';
comment on column backend.website.url is 'The website’s url.';
comment on column backend.website.data is 'The website’s data.';
comment on column backend.website.created_at is 'The time this website was created.';

create table backend_private.user_account (
    user_id uuid PRIMARY KEY NOT NULL REFERENCES backend.user(id) on delete cascade,
    email TEXT NOT NULL UNIQUE CHECK (email ~* '^.+@.+\..+$'),
    password_hash TEXT NOT NULL
);

comment on table backend_private.user_account is 'Private information about a user’s account.';
comment on column backend_private.user_account.user_id is 'The primary unique identifier for the account.';
comment on column backend_private.user_account.email is 'The email address of the user.';
comment on column backend_private.user_account.password_hash is 'An opaque hash of the user’s password.';

/* FUNCTIONS */

create function backend.user_full_name(u backend.user) returns text as $$
  select u.first_name || ' ' || u.last_name
$$ language sql stable;

comment on function backend.user_full_name(backend.user) is 'A user’s full name which is a concatenation of their first and last name.';

create function backend.register_user(
  first_name text,
  last_name text,
  email text,
  password text
) returns backend.user as $$
declare
  new_user backend.user;
begin
  insert into backend.user (first_name, last_name) values
    (first_name, last_name)
    returning * into new_user;

  insert into backend_private.user_account (user_id, email, password_hash) values
    (new_user.id, email, crypt(password, gen_salt('bf')));

  return new_user;
end;
$$ language plpgsql strict security definer;

comment on function backend.register_user(text, text, text, text) is 'Registers a single user and creates an account in our platform.';
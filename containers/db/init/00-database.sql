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

/* type: jwt_token */
create type website.jwt_token as (
  role text,
  user_id uuid,
  email text,
  expires_at bigint
);
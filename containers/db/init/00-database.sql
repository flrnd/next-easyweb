\connect backend;

/* enable PGCRYPTO */
CREATE EXTENSION IF NOT EXISTS pgcrypto;

/*Create user table in public schema*/
CREATE TABLE public.user (
    id SERIAL PRIMARY KEY,
    realname TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE check (email ~* '^.+@.+\..+$'),
    password TEXT NOT NULL,
    created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

COMMENT ON TABLE public.user IS
'Web users.';

/*Create post table in public schema*/
CREATE TABLE public.website (
    id SERIAL PRIMARY KEY,
    title TEXT,
    url TEXT,
    data JSONB,
    created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    owner_id INTEGER NOT NULL REFERENCES public.user(id)
);

COMMENT ON TABLE public.website IS
'Website owned by a user.';

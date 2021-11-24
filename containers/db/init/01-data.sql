\connect backend;

/*Create some dummy users*/
INSERT INTO public.user (realname, email, password) VALUES
('Benjie', 'benji@email', crypt('password', gen_salt('bf'))),
('Jenny', 'jenny@email', crypt('password', gen_salt('bf'))),
('John', 'john@email', crypt('password', gen_salt('bf'))),
('Jill', 'jill@email', crypt('password', gen_salt('bf')));

/*Create some dummy websites*/
INSERT INTO public.website (title, url, data, owner_id) VALUES
('Benji', 'http://benji.com', '{"seo": "benji personal blog", "contact": {"phone": "123-456-7890", "email": "benji@email.com"} }', 1),
('Singingwolfboy', 'http://singingwolfboy.com', '{"seo": "Singingwolfboy personal blog", "contact": {"phone": "123-456-7890", "email": "singing@email.com"}}', 2),
('Lexius', 'http://lexius.com', '{"seo": "Lexius personal blog", "contact": {"phone": "123-456-7890", "email": "lexius@email.com"} }', 3);
\connect backend;

/*
 * Create some dummy data
*/

WITH new_users AS (
  SELECT * FROM (VALUES
  ('John', 'Doe', 'email@something.com', 'secret 1'),
  ('Jane', 'Doe', 'jane@dot.com', 'secret 2'),
  ('Mike', 'Donovan', 'mike@my.es', 'pdw123'),
  ('Carles', 'Puig', 'carles@del.net', '12345')) AS t (first_name, last_name, email, password)
)
SELECT backend.register_user(first_name, last_name, email, password) FROM new_users;

/*
Create some dummy websites
INSERT INTO public.website (title, url, data, owner_id) VALUES
('Benji', 'http://benji.com', '{"seo": "benji personal blog", "contact": {"phone": "123-456-7890", "email": "benji@email.com"} }', 1),
('Singingwolfboy', 'http://singingwolfboy.com', '{"seo": "Singingwolfboy personal blog", "contact": {"phone": "123-456-7890", "email": "singing@email.com"}}', 2),
('Lexius', 'http://lexius.com', '{"seo": "Lexius personal blog", "contact": {"phone": "123-456-7890", "email": "lexius@email.com"} }', 3);

*/
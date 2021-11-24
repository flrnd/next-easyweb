\connect backend;

/*
* Create some dummy data
*/

INSERT INTO backend.user (first_name, last_name) VALUES
('John', 'Doe'), ('Jane', 'Doe'), ('Mike', 'Donovan');

WITH ids as (
  SELECT id FROM  backend.user
),
accounts as (
  SELECT * FROM (VALUES
  ('email@something.com', 'secret 1'),
  ('jane@mydow.com', 'this is my pwd'),
  ('mikedot@got.com', '12345'))
  AS t(email, password)
)
INSERT INTO backend_private.user_account (account_id, email, password_hash)
SELECT ids.id, accounts.email, accounts.password FROM ids, accounts;

/*Create some dummy websites*/
INSERT INTO public.website (title, url, data, owner_id) VALUES
('Benji', 'http://benji.com', '{"seo": "benji personal blog", "contact": {"phone": "123-456-7890", "email": "benji@email.com"} }', 1),
('Singingwolfboy', 'http://singingwolfboy.com', '{"seo": "Singingwolfboy personal blog", "contact": {"phone": "123-456-7890", "email": "singing@email.com"}}', 2),
('Lexius', 'http://lexius.com', '{"seo": "Lexius personal blog", "contact": {"phone": "123-456-7890", "email": "lexius@email.com"} }', 3);
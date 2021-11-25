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
SELECT website.register_user(first_name, last_name, email, password) FROM new_users;

/*
Create some dummy websites
*/
/*
 *
 * Create some dummy data
*/

\connect backend;

WITH new_users AS (
  SELECT * FROM (VALUES
  ('John', 'Doe', 'email@example.com', '12345'),
  ('Jane', 'Doe', 'jane@example.com', '12345'),
  ('Mike', 'Donovan', 'mike@example.com', '12345'),
  ('Carles', 'Puig', 'carles@example.com', '12345')) AS t (first_name, last_name, email, password)
)
SELECT website.register_user(first_name, last_name, email, password) FROM new_users;

/*
Create some dummy websites
*/
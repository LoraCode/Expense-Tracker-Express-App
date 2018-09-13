
DELETE FROM categories;

INSERT INTO categories (name)
VALUES
    ('Rent'),
    ('Mortgage'),
    ('Car payment'),
    ('Auto insurance'),
    ('Electric bill'),
    ('Gifts');

DELETE FROM transactions;

INSERT INTO transactions (description, amount, category_name)
VALUES ('Toy car for sons birthday', 20, 'Gifts');
INSERT INTO transactions (description, amount, category_name)
VALUES ('Moms monthly utility bill', 100, 'Electric bill');
INSERT INTO transactions (description, amount, category_name)
VALUES ('August 2018 car inspection', 80, 'Car payment');
INSERT INTO transactions (description, amount, category_name)
VALUES ('August 2018 Midtown complex', 4500, 'Rent');
INSERT INTO transactions (description, amount, category_name)
VALUES ('Magic cards for Deiby', 68, 'Gifts');

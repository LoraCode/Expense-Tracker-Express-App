\c expenses_dev

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

INSERT INTO transactions (description, amount, category_id)
VALUES ('Toy car for sons birthday', 20, 6);
INSERT INTO transactions (description, amount, category_id)
VALUES ('Moms monthly utility bill', 100, 5);
INSERT INTO transactions (description, amount, category_id)
VALUES ('August 2018 car inspection', 80, 3);

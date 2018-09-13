/* SEED */

const user = require('../controllers/auth/auth');
const category = require('../models/category');
const transaction = require('../models/transaction');

const userSeedData = [
  {
    username: 'Lora',
    email: 'jonathan.lora.95@gmail.com',
    password: 'password',
  },
  {
    username: 'Lin',
    email: 'cLinDev@gmail.com',
    password: '12345',
  },
];

const categorySeedData = [
  {
    name: 'Gifts',
  },
  {
    name: 'Rent',
  },
  {
    name: 'Electric bill',
  },
  {
    name: 'Car payment',
  },
];

const transactionSeedData = [
  {
    description: 'Toy car for sons birthday',
    amount: 50,
    category_name: 'Gifts',
  },
  {
    description: 'Moms monthly utility bill',
    amount: 100,
    category_name: 'Electric bill',
  },
  {
    description: 'August 2018 car inspection',
    amount: 120,
    category_name: 'Car payment',
  },
  {
    description: 'August 2018 Midtown complex',
    amount: 4500,
    category_name: 'Rent',
  },
  {
    description: 'Magic cards for Deiby',
    amount: 60,
    category_name: 'Gifts',
  },
];

const seed = async () => {
  // Seed categories
  await Promise.all(categorySeedData.map(category.saveCategory));
  // Seed users
  let req;
  const users = await Promise.all(userSeedData
    .map(({ username, email, password } = req) => user.register(req)));
  const transactionQueries = transactionSeedData.map((t, indx) => (
    transaction.saveTransaction({ ...t, username_id: users[indx % users.length].id })
  ));
  const transactions = await Promise.all(transactionQueries);
  console.log(transactions);
};

seed();

# Expense-Tracker Express App
Expense-Tracker stores users, and allows each particualr user to log their own expenses. The app is meant to provide full control over one user's log history, and it utilizes Auth to seperate and distinct each transaction logged from their presented user.

http://jonathanlora.com/Expense-Tracker-Express-App/

# Motivation
Walking into this project, I was quickly eagered to implement Api usage and Auth configuration. Although these were exciting fields to explore upon, I was limited by the UI aspect of my entire app. Why use my app? Who is using my app? Questions like these proposed a problem for my planning phase. Tracking transactions happened to be the perfect beginner-friendly idea for practice. It's an idea where I knew I could start small, set myself with a manageable work-load, and build upon.

# User Stories
I am a user that wants to check how much the gift for my nephew cost.
I am a user that wants to check how much I've spent on gas two weeks ago.
I am a user that wants to find the average I've spent in the past week/month/year.
I am a user that wants to post today's expenses.
I am a user that wants to update a certain transaction.
I am a user that wants to remove a certain transaction.
I am a user that wants to build a list of expenses.

# EDR
(Scratch the new table. Tags will either be made to have a many to many relations with transaction table or I'll have each transaction have only ONE tag and have a separate table that groups those tags together (travel/transportation expenses, etc))
![img_20180801_163555](https://media.git.generalassemb.ly/user/14921/files/587728a0-95ab-11e8-83b0-e8a0dc9d6699)

# Wireframe
(still unclear about the UI since I'm most likely going to be freestyling it (no front-end framework))
![img_20180801_161446](https://media.git.generalassemb.ly/user/14921/files/7342a9d4-95ab-11e8-955d-33777d9d657c)

# Tech/framework used
JS, HTML, CSS, Bulma, Express, Node

# Code Example
// REGISTER CONFIGURATION

const register = async (req, res, next) => {
  // Convert SALT value from .env to an integer
  const salt = parseInt(process.env.SALT);
  // Hash registered password with hidden number of SALT rounds
  const hash = bcrypt.hashSync(req.body.password, salt);
  // Registered user's credentials
  const user = {
    username: req.body.username,
    email: req.body.email,
    password_digest: hash,
  };
  try {
    // Store credentials into database
    const savedUser = await db.createUser(user);
    // Store user's cookie for when they try to log in
    req.session.user = savedUser;
    // Call next piece of middleware
    next();
  } catch (err) {
    // Display register error message to user
    authView.registerError(req, res, next);
  }
};

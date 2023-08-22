# QuizApplication

## Setup Instructions

1. Add a `.env` file in both the root directory and the `client` folder.

   ### /.env

   ```
   MONGO_URL=YourMongoDB-URL
   JWT_COOKIE_EXPIRES_IN=30
   JWT_EXPIRES_IN=30m
   JWT_SECRET=testapp
   ```

   ### /client/.env

   ```
   REACT_APP_SERVER_URL=http://localhost:5000
   ```

2. Modify addQuestions.js & addUsers.js according to your needs.

3. After adding your remote MongoDB URL, run the following commands

   ```
   node addQuestions.js
   ```
    and
   ```
   node addUsers.js
   ```
    to add Questions and Users respectively.


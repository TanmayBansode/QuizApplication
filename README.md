# <span style="color:blue; font-size:2em; font-weight:bold;">QuizApplication</span>

<span style="color:black; font-size:1.2em;">QuizApplication is a full-stack web application that allows users to take quizzes on various topics. It is built using Node.js for the backend, MongoDB for the database, and React.js for the frontend. The application supports user authentication, quiz creation, and score tracking.</span>

## <span style="color:blue; font-size:1.5em; font-weight:bold;">Code Structure</span>

<span style="color:black; font-size:1.2em;">The application is divided into two main parts: the server and the client. The server is written in Node.js and is located in the root directory. It contains the logic for user authentication, quiz creation, and score tracking. The client is written in React.js and is located in the `client` folder. It contains the user interface for the application.</span>

<span style="color:black; font-size:1.2em;">The `addQuestions.js` and `addUsers.js` scripts are used to populate the database with initial data. They are located in the root directory.</span>

<span style="color:black; font-size:1.2em;">The `.env` files contain environment variables for the server and client. They are located in the root directory and the `client` folder respectively.</span>

## <span style="color:blue; font-size:1.5em; font-weight:bold;">Getting Started</span>

<span style="color:black; font-size:1.2em;">These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.</span>

### <span style="color:blue; font-size:1.3em; font-weight:bold;">Prerequisites</span>

<span style="color:black; font-size:1.2em;">You need to have Node.js and MongoDB installed on your machine to run this project locally.</span>

### <span style="color:blue; font-size:1.3em; font-weight:bold;">Setup Instructions</span>

1. <span style="color:black; font-size:1.2em;">Clone the repository to your local machine.</span>

2. <span style="color:black; font-size:1.2em;">Install the dependencies by running `npm install` in both the root directory and the `client` folder.</span>

3. <span style="color:black; font-size:1.2em;">Add a `.env` file in both the root directory and the `client` folder with the following configurations:</span>

   ### <span style="color:blue; font-size:1.3em; font-weight:bold;">/.env</span>

   ```
   MONGO_URL=YourMongoDB-URL
   JWT_COOKIE_EXPIRES_IN=30
   JWT_EXPIRES_IN=30m
   JWT_SECRET=testapp
   ```

   ### <span style="color:blue; font-size:1.3em; font-weight:bold;">/client/.env</span>

   ```
   REACT_APP_SERVER_URL=http://localhost:5000
   ```

4. <span style="color:black; font-size:1.2em;">Modify `addQuestions.js` & `addUsers.js` according to your needs. These scripts are used to populate the database with initial data.</span>

5. <span style="color:black; font-size:1.2em;">After adding your remote MongoDB URL, run the following commands to add Questions and Users respectively:</span>

   ```
   node addQuestions.js
   ```
   and
   ```
   node addUsers.js
   ```

6. <span style="color:black; font-size:1.2em;">Start the server by running `nodemon server.js` in the root directory and the client by running `npm start` in the `client` folder.</span>

## <span style="color:blue; font-size:1.5em; font-weight:bold;">Usage</span>

<span style="color:black; font-size:1.2em;">After starting the server and client, open your browser and navigate to `http://localhost:3000` to start using the application. You can register a new user, login, take quizzes, and view your scores.</span>

## <span style="color:blue; font-size:1.5em; font-weight:bold;">Contributing</span>

<span style="color:black; font-size:1.2em;">We welcome contributions from everyone. If you're interested in contributing, please fork the repository, make your changes, and submit a pull request. If you have any questions or need help with the process, feel free to reach out.</span>

## <span style="color:blue; font-size:1.5em; font-weight:bold;">License</span>

<span style="color:black; font-size:1.2em;">This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.</span>


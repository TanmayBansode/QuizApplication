const mongoose = require("mongoose");
const User = require("./models/user");

require("dotenv").config();

// MongoDB connection
const MONGODB_URI = process.env.MONGO_URL;
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const usersToAdd = [
  {
    name: "Aarav Sharma",
    email: "aarav.sharma@example.com",
    school: "Delhi Public School",
    isGiving: false,
    hasGiven: false,
    score : null,
    password: "00000000",
  },
  {
    name: "Aditi Patel",
    email: "aditi.patel@example.com",
    school: "St. Xavier's School",
    isGiving: false,
    hasGiven: false,
    score : null,
    password: "00000000",
  },
  {
    name: "Advait Desai",
    email: "advait.desai@example.com",
    school: "Bhartiya Vidya Bhavan",
    isGiving: false,
    hasGiven: false,
    score : null,
    password: "00000000",
  }
];



async function addUsersToDatabase() {
  for (const userData of usersToAdd) {
    try {
      const newUser = new User(userData);
      const savedUser = await newUser.save();
      console.log("New user added:", savedUser);
    } catch (error) {
      console.error("Error adding user:", error.message);
    }
  }
  mongoose.connection.close();
}

addUsersToDatabase();

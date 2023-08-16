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
    hasGiven: true,
    password: "00000000",
  },
  {
    name: "Aditi Patel",
    email: "aditi.patel@example.com",
    school: "St. Xavier's School",
    hasGiven: false,
    password: "00000000",
  },
  {
    name: "Advait Desai",
    email: "advait.desai@example.com",
    school: "Bhartiya Vidya Bhavan",
    hasGiven: false,
    password: "00000000",
  },
  {
    name: "Akshara Singh",
    email: "akshara.singh@example.com",
    school: "Army Public School",
    hasGiven: false,
    password: "00000000",
  },
  {
    name: "Aryan Verma",
    email: "aryan.verma@example.com",
    school: "Kendriya Vidyalaya",
    hasGiven: false,
    password: "00000000",
  },
  {
    name: "Chahat Choudhary",
    email: "chahat.choudhary@example.com",
    school: "Bharatiya Vidya Bhavan",
    hasGiven: false,
    password: "00000000",
  },
  {
    name: "Devika Reddy",
    email: "devika.reddy@example.com",
    school: "Sri Chaitanya Techno School",
    hasGiven: false,
    password: "00000000",
  },
  {
    name: "Eshaan Kapoor",
    email: "eshaan.kapoor@example.com",
    school: "The Mother's International School",
    hasGiven: false,
    password: "00000000",
  },
  {
    name: "Gayatri Gupta",
    email: "gayatri.gupta@example.com",
    school: "Modern School",
    hasGiven: false,
    password: "00000000",
  },
  {
    name: "Harsh Shah",
    email: "harsh.shah@example.com",
    school: "Vidya Niketan School",
    hasGiven: false,
    password: "00000000",
  },
  {
    name: "Ishaan Joshi",
    email: "ishaan.joshi@example.com",
    school: "DPS RK Puram",
    hasGiven: false,
    password: "00000000",
  },
  {
    name: "Juhi Mishra",
    email: "juhi.mishra@example.com",
    school: "Loreto Convent School",
    hasGiven: false,
    password: "00000000",
  },
  {
    name: "Kabir Singh",
    email: "kabir.singh@example.com",
    school: "La Martiniere Boys' College",
    hasGiven: false,
    password: "00000000",
  },
  {
    name: "Lavanya Gupta",
    email: "lavanya.gupta@example.com",
    school: "Sanskriti School",
    hasGiven: false,
    password: "00000000",
  },
  {
    name: "Manan Sharma",
    email: "manan.sharma@example.com",
    school: "DPS Noida",
    hasGiven: false,
    password: "00000000",
  },
  {
    name: "Navya Patel",
    email: "navya.patel@example.com",
    school: "Amity International School",
    hasGiven: false,
    password: "00000000",
  },
  {
    name: "Omkar Verma",
    email: "omkar.verma@example.com",
    school: "Ryan International School",
    hasGiven: false,
    password: "00000000",
  },
  {
    name: "Prisha Singh",
    email: "prisha.singh@example.com",
    school: "The Shri Ram School",
    hasGiven: false,
    password: "00000000",
  },
  {
    name: "Rahul Mehta",
    email: "rahul.mehta@example.com",
    school: "St. Mary's School",
    hasGiven: false,
    password: "00000000",
  },
  {
    name: "Samaira Bhatia",
    email: "samaira.bhatia@example.com",
    school: "Cathedral and John Connon School",
    hasGiven: false,
    password: "00000000",
  },
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

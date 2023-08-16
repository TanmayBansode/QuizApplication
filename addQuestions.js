const mongoose = require("mongoose");
const Question = require("./models/question");

require("dotenv").config();

// MongoDB connection
const MONGODB_URI = process.env.MONGO_URL;
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

console.log("Database Connected Sucessfully");

const questionsToAdd = [
    {
        questionText: 'What is the process of converting data into a code to prevent unauthorized access called?',
        options: ['Decryption', 'Encryption', 'Encoding', 'Decoding'],
        correctAnswer: 1,
    },
    {
        questionText: 'Which planet is known as the "Red Planet"?',
        options: ['Earth', 'Mars', 'Venus', 'Jupiter'],
        correctAnswer: 1,
    },
    {
        questionText: 'What is the chemical symbol for water?',
        options: ['W', 'O', 'H2O', 'WO'],
        correctAnswer: 2,
    },
    {
        questionText: 'What is the unit of electric current?',
        options: ['Volt', 'Ohm', 'Ampere', 'Watt'],
        correctAnswer: 2,
    },
    {
        questionText: 'Which scientist is known for the theory of general relativity?',
        options: ['Isaac Newton', 'Albert Einstein', 'Galileo Galilei', 'Marie Curie'],
        correctAnswer: 1,
    },
    {
        questionText: 'What is the smallest unit of computer memory?',
        options: ['Byte', 'Bit', 'Kilobyte', 'Megabyte'],
        correctAnswer: 1,
    },
    {
        questionText: 'Who is the inventor of the World Wide Web (WWW)?',
        options: ['Bill Gates', 'Tim Berners-Lee', 'Steve Jobs', 'Mark Zuckerberg'],
        correctAnswer: 1,
    },
    {
        questionText: 'What is the process of combining two or more atoms to form a heavier nucleus called?',
        options: ['Fusion', 'Fission', 'Splitting', 'Nucleation'],
        correctAnswer: 0,
    },
    {
        questionText: 'Which programming language is widely used for web development and known for its ease of use?',
        options: ['Java', 'C++', 'Python', 'JavaScript'],
        correctAnswer: 3,
    },
    {
        questionText: 'What is the chemical symbol for gold?',
        options: ['Au', 'Ag', 'Fe', 'Cu'],
        correctAnswer: 0,
    },
];

async function addQuestionsToDatabase() {
    for (const questionData of questionsToAdd) {
        try {
            const newQuestion = new Question(questionData);
            const savedQuestion = await newQuestion.save();
            console.log("New question added:", savedQuestion);
        } catch (error) {
            console.error("Error adding question:", error.message);
        }
    }
    mongoose.connection.close();
    console.log("Database Connection Closed");
}

addQuestionsToDatabase();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
const MONGODB_URI = process.env.MONGO_URL;
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", async () => {
  console.log("MongoDB database connection established successfully.");
});

// Routes
const questionsRouter = require("./routes/questions");
const responsesRouter = require("./routes/responses");
const usersRouter = require("./routes/users");
const timeRouter = require("./routes/timeRouter")

app.use("/questions", questionsRouter);
app.use("/responses", responsesRouter);
app.use("/users", usersRouter);
app.use("/time", timeRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

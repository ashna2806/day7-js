require("dotenv").config();
const express = require("express");
const connectDB = require("./index");
const Task = require("./models/Task");

const app = express();
app.use(express.json());

// connect DB
connectDB();

// test route
app.get("/", (req, res) => {
  res.send("Server running with MongoDB Atlas");
});

// query + print tasks
app.get("/tasks", async (req, res) => {
  const tasks = await Task.find();
  console.log(tasks);
  res.json(tasks);
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
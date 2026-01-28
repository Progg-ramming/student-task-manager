const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// Read tasks from JSON
const readTasks = () => {
  const data = fs.readFileSync("tasks.json");
  return JSON.parse(data);
};

// Write tasks to JSON
const writeTasks = (tasks) => {
  fs.writeFileSync("tasks.json", JSON.stringify(tasks, null, 2));
};

// API: List Tasks
app.get("/tasks", (req, res) => {
  const tasks = readTasks();
  res.json(tasks);
});

// API: Add Task
app.post("/tasks", (req, res) => {
  const tasks = readTasks();
  const newTask = req.body.task;

  tasks.push(newTask);
  writeTasks(tasks);

  res.json({ message: "Task added successfully" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

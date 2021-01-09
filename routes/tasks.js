const connection = require("../database/crudrepository.js");
const express = require("express");
const tasks = express.Router();

const main = async () => {
  // Get all tasks
  tasks.get("/api", (req, res) => {
    connection.findAll().then((data) => res.send(data));
  });
  // Add task
  tasks.post("/", async (req, res) => {
    const task = req.body;
    connection.save(task).then(() => res.send("task saved"));
  });
  // Get tasks by userId
  tasks.get(`/user/:userId([0-9]+)`, async (req, res) => {
    const userId = Number(req.params.userId);
    connection.findById(userId).then((data) => res.send(data));
  });
  // Edit task
  tasks.post(`/task/:taskId([0-9]+)`, async (req, res) => {
    const taskId = Number(req.params.taskId);
    const column = req.body;
    connection.edit(column, taskId).then(() => res.send("task saved"));
  });
  // Delete all done tasks
  tasks.delete(`/`, async (req, res) => {
    connection
      .deleteDoneTasks()
      .then(() => res.send("deleted all tasks that are marked done"));
  });
};
main();
module.exports = tasks;

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
  tasks.get(`/user/:userId([1-9]+)`, async (req, res) => {
    const userId = Number(req.params.userId);
    connection.findById(userId).then((data) => res.send(data));
  });
  // Edit task
  tasks.post(`/task/:taskId([1-9]+)`, async (req, res) => {
    const taskId = Number(req.params.taskId);
    const task = req.body;
    connection.edit(task, taskId).then(() => res.send("task saved"));
  });
  // Delete all done tasks
  tasks.delete(`/user/:userId([1-9]+)`, async (req, res) => {
    const userId = Number(req.params.userId);
    connection
      .deleteDoneTasks(userId)
      .then(() => res.send("deleted all tasks that are marked done"));
  });
};
main();
module.exports = tasks;

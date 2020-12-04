const connection = require("../database/crudrepository.js");
const express = require("express");
const tasks = express.Router();

const main = async () => {
  tasks.get("/api", (req, res) => {
    connection.findAll().then((data) => res.send(data));
  });
  tasks.post("/user/:userId([1-9]+)", async (req, res) => {
    const task = req.body;
    connection.save(task).then(() => res.send("task saved"));
  });
  tasks.get(`/user/:userId([1-9]+)`, async (req, res) => {
    const userId = Number(req.params.userId);
    connection.findById(userId).then((data) => res.send(data));
  });
  tasks.post(`/user/:userId([1-9]+)/task/:taskId([1-9]+)`, async (req, res) => {
    const taskId = Number(req.params.taskId);
    const task = req.body;
    connection.edit(task, taskId).then(() => res.send("task saved"));
  });
  tasks.delete(`/user/:userId([1-9]+)`, async (req, res) => {
    const userId = Number(req.params.userId);
    connection
      .deleteDoneTasks(userId)
      .then(() => res.send("deleted all tasks that are marked done"));
  });
};
main();
module.exports = tasks;

const connection = require("../database/crudrepository.js");
const express = require("express");
const tasks = express.Router();

const main = async () => {
  tasks.get("/", (req, res) => {
    connection.findAll().then((data) => res.send(data));
  });
  tasks.post("/", async (req, res) => {
    const task = req.body;
    connection.save(task).then(() => res.send("task saved"));
  });
  tasks.get(`/user/:userId([1-9]+)`, async (req, res) => {
    const userId = Number(req.params.userId);
    connection.findById(userId).then((data) => res.send(data));
  });
  /* EDITING TASK IN PROGRESS
  tasks.get(`/user/:userId([1-9]+)/post/:postId([1-9]+)`, async (req, res) => {
    const postId = Number(req.params.postId);
    const task = req.body;
    connection.edit(task, postId).then(() => res.send("task saved"));
  });
  */
};
main();
module.exports = tasks;

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
  /*
  tasks.get(`/:urlId([1-9]+)`, async (req, res) => {
    const urlId = Number(req.params.urlId);
    connection.findById(urlId).then((data) => res.send(data));
  }); */
};
main();
module.exports = tasks;

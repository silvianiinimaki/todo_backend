const connection = require("../database/crudrepository.js");
const express = require("express");
const tasks = express.Router();

const main = async () => {
  tasks.get("/", (req, res) => {
    connection.findAll().then((data) => res.send(data));
  });
  tasks.post("/", async (req, res) => {
    const loc = req.body;
    connection.save(loc).then(() => res.send("saved location"));
  });
};
main();
module.exports = tasks;

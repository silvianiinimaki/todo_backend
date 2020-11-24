const connection = require("../database/crudrepository.js");
const express = require("express");
const connectionFunctions = require("../database/crudrepository.js");
const tasks = express.Router();

const main = async () => {
  tasks.get("/", (req, res) => {
    connection.findAll().then((data) => res.send(data));
  });
  tasks.post("/", async (req, res) => {
    const loc = req.body;
    connection.save(loc).then(() => res.send("saved location"));
  });
  tasks.get(`/:urlId([1-9]+)`, (req, res) => {
    const urlId = Number(req.params.urlId);
    connection.findById(urlId).then((data) => res.send(data));
  });
};
main();
module.exports = tasks;

const connection = require("../database/crudrepository.js");
const express = require("express");
const tasks = express.Router();

const main = async () => {
  tasks.get("/", (req, res) => {
    connection.findAll().then((data) => res.send(data));
  });
};
main();
module.exports = tasks;

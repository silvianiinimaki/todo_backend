const mysql = require("mysql");
const pool = mysql.createPool({
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
});
module.exports = pool;

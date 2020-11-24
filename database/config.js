const mysql = require("mysql");
const pool = mysql.createPool({
  host: "mydb.tamk.fi",
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
  connectionLimit: 10,
});
module.exports = pool;

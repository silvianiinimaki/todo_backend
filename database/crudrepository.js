const pool = require("./config.js");

const connectionFunctions = {
  findAll: () => {
    function findAll(resolve, reject) {
      pool.getConnection((err, connection) => {
        if (err) reject("Can't connect");
        connection.query("SELECT * FROM task", (err, task) => {
          if (err) reject();
          const temp = JSON.stringify(task);
          const result = JSON.parse(temp);
          connection.release();
          resolve(result);
        });
      });
      return new Promise(findAll);
    }
  },
};
module.exports = connectionFunctions;

const pool = require("./config.js");

const connectionFunctions = {
  findAll: () => {
    function findAll(resolve, reject) {
      pool.getConnection((err, connection) => {
        if (err) reject();
        connection.query("SELECT * FROM task", (err, tasks) => {
          if (err) {
            reject();
          }
          const temp = JSON.stringify(tasks);
          const olio = JSON.parse(temp);
          connection.release();
          resolve(olio);
        });
      });
    }
    return new Promise(findAll);
  },
};
module.exports = connectionFunctions;

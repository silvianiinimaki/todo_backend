const pool = require("./config.js");

const connectionFunctions = {
  findAll: () => {
    function findAll(resolve, reject) {
      pool.getConnection((err, connection) => {
        if (err) reject(err);
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
  /*
  findById: (id) => {
    function findById(resolve, reject) {
      pool.getConnection((err, connection) => {
        if (err) reject(err);
        connection.query(
          "SELECT * FROM task WHERE user_id = ?",
          [id],
          (err, tasks) => {
            if (err) reject(err);
            const temp = JSON.stringify(tasks);
            const olio = JSON.parse(temp);
            connection.release();
            resolve(olio);
          }
        );
      });
    }
    return new Promise(findById); 
  },  */
  save: (task) => {
    function save(resolve, reject) {
      try {
        pool.getConnection((err, connection) => {
          if (err) reject(err);
          connection.query("INSERT INTO task SET ?", task, (err, task) => {
            if (err) reject(err);
            connection.release();
            resolve();
          });
        });
      } catch (err) {
        reject(err);
      }
    }
    return new Promise(save);
  },
};
module.exports = connectionFunctions;

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
  deleteDoneTasks: (userId) => {
    function deleteDoneTasks(resolve, reject) {
      pool.getConnection((err, connection) => {
        if (err) reject(err);
        connection.query(
          "DELETE FROM task WHERE checked != 0",
          (err) => {
            if (err) reject(err);
            connection.release();
            resolve();
          }
        );
      });
    }
    return new Promise(deleteDoneTasks);
  },
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
  },
  save: (task) => {
    function save(resolve, reject) {
      try {
        pool.getConnection((err, connection) => {
          if (err) reject(err);
          connection.query("INSERT INTO task SET ?", [task], (err) => {
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

  edit: (task, id) => {
    function edit(resolve, reject) {
      try {
        pool.getConnection((err, connection) => {
          if (err) reject(err);
          connection.query(
            "UPDATE task SET ? WHERE id = ?",
            [task, id],
            (err) => {
              if (err) reject(err);
              connection.release();
              resolve();
            }
          );
        });
      } catch (err) {
        reject(err);
      }
    }
    return new Promise(edit);
  },
};
module.exports = connectionFunctions;

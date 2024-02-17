// sqlconnect.js
const sql = require("mysql2");

function createConnection() {
  const con = sql.createConnection({
    host: "localhost",
    user: "root",
    password: "2005",
    database: "FC",
  });

  con.connect((error) => {
    if (error) {
      console.error("Couldn't connect to SQL Database");
    } else {
      console.log("Connected to SQL Database");
    }
  });

  return con;
}

module.exports = { createConnection };

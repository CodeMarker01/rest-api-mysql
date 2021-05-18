const mysql = require("mysql2/promise"); //promise if u want to use async

/**
 * @createConnection: create new database
 * @createPool: re-use exits database
 */
const pool = mysql.createPool({
  user: "root",
  password: "votuongquang",
  host: "localhost",
  port: 3306,
  database: "todotutorial",
});

module.exports = pool;

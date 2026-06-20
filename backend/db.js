
require("dotenv").config();

const mysql = require("mysql2");

const connectionConfig = process.env.MYSQL_URL
  ? process.env.MYSQL_URL
  : {
      host: process.env.MYSQLHOST || "localhost",
      port: process.env.MYSQLPORT ? parseInt(process.env.MYSQLPORT, 10) : 3306,
      user: process.env.MYSQLUSER || "root",
      password: process.env.MYSQLPASSWORD || "pass123",
      database: process.env.MYSQLDATABASE || "notesdb",
    };

const db = mysql.createConnection(connectionConfig);

db.connect((err) => {
  if (err) {
    console.error("MySQL connection error:", err.message);
  } else {
    console.log("MySQL Connected");
  }
});

module.exports = db;
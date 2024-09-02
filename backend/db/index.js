const mysql = require("mysql2");
const connection = mysql.createPool({
  host: "database-1.cpdcpahajp2o.ap-south-1.rds.amazonaws.com",
  // host: "127.0.0.1",
  user: process.env.user,
  password: process.env.pass,
  database: "db",
});

module.exports = connection;

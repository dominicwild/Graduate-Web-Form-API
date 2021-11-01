const mysql = require("mysql");

const con = mysql.createConnection({
  host: "host.docker.internal",
  port: 3306,
  database: "graduateapp",
  user: "root",
  password: ""
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to MySQL database.");
});

module.exports = con;

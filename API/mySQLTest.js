const database = require("./MySQLDatabaseConnection");

database.query("SELECT * FROM users", (err, result) => {
  if (err) throw err;
  console.log(result);
});

database.end();

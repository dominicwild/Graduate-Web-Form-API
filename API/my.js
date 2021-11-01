const database = require("./MySQLDatabaseConnection");
var response = {};

exports.lambdaHandler = (event, context, callback) => {
  try {
    database.query("SELECT * FROM users", (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        response = {
          statusCode: 200,
          body: JSON.stringify({
            message: "My function",
            result,
            event,
            context
            // location: ret.data.trim()
          })
        };
        callback(null, response);
        database.end();
      }
    });
  } catch (err) {
    console.log(err);
    callback(err, {response});
  }
};

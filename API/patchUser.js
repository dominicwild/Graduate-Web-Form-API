const { User } = require("./models/index");
var response = {};

exports.lambdaHandler = (event, context, callback) => {
  try {
    const body = JSON.parse(event.body);
    const id = body.id;
    delete body.id;

    User.update(body, { where: { id } }).then(rowsAffected => {
      response = {
        statusCode: 200,
        body: {
          rowsAffected: rowsAffected[0]
        }
      };
      callback(null, response);
    });

    //   database.query("UPDATE users SET ? WHERE id = ?", [body, id], (err, result) => {
    //     if (err) {
    //       callback(err, null);
    //     } else {
    //       response = {
    //         statusCode: 200,
    //         body: JSON.stringify({
    //           result
    //         })
    //       };
    //       callback(null, response);
    //       database.end();
    //     }
    //   });
  } catch (err) {
    console.log(err);
    callback(err, null);
  }
};

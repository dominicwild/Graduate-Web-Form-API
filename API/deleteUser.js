const { User } = require("./models/index");
var response = {};

exports.lambdaHandler = (event, context, callback) => {
  try {
    const { id } = JSON.parse(event.body);
    User.destroy({
      where: {
        id: id
      }
    }).then(numDestroyedRows => {
      response = {
        statusCode: 200,
        body: JSON.stringify({
          deleted: numDestroyedRows === 1
        })
      };
      callback(null, response);
    });

  } catch (err) {
    console.log(err);
    callback(err, null);
  }
};

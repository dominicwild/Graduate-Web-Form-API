const {Gender} = require("./models/index");
var response = {};

exports.lambdaHandler = (event, context, callback) => {
  try {
    Gender.findAll({
      attributes: ['id', 'name']
    }).then(result => {
      response = {
        statusCode: 200,
        body: {
          result
        }
      }
      callback(null, response)
    })
  } catch (err) {
    console.log(err);
    callback(err, null);
  }
};

const { User } = require("./models/index");
var response = {};

exports.lambdaHandler = async (event, context, callback) => {
  try {
    const { firstName, lastName, GenderId, email, mobile, StudyFieldId, StreamId, SiteId, LocationId } = JSON.parse(event.body);
    const values = {
      firstName,
      lastName,
      GenderId,
      email,
      mobile,
      StudyFieldId,
      StreamId,
      SiteId,
      LocationId
    };

    const user = await User.create(values);
    callback(null, {statusCode: 200, body: {result: user}});

  } catch (err) {
    console.log(err);
    callback(err, null);
  }
};

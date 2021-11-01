const { User } = require("./models/index");

async function main() {
  const values = {
    firstName: "Dom",
    lastName: "Wild",
    GenderId: 1,
    email: "w@w",
    mobile: "928",
    StudyFieldId: 1,
    StreamId: 1,
    SiteId: 1,
    LocationId: 1
  };

  const user = await User.create(values);
  callback(null, user);
}

main();

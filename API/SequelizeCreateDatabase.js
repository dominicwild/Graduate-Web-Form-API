process.env.NODE_ENV = "local-dev";

const { sequelize, Gender, Stream, Site, StudyField, Location, User } = require("./models/index");

//Not recommended to use alter:true in production, drops data in altered columns
//Force drops the entire table and rebuilds it, including all its data
sequelize.sync({ force: true }).then(async err => {
  // console.log(err);
  console.log("Sync operation complete.");

  await Gender.bulkCreate([{ name: "Male" }, { name: "Female" }, { name: "Other" }, { name: "Prefer not to say" }]);
  await Stream.bulkCreate([{ name: "General" }, { name: "Technical" }]);
  await Site.bulkCreate([{ name: "Chorley" }, { name: "Newcastle" }]);
  await Location.bulkCreate([{ name: "Edgehill" }, { name: "Lancaster" }]);
  await StudyField.bulkCreate([{name: "Computer Science"}, {name: "Criminology"}, {name: "Psychology"}, {name: "Cybersecurity"}])
  
  await User.create({
    firstName: "SomethingFirst",
    lastName: "SomethingLast",
    LocationId: 1,
    GenderId: 1,
    SiteId: 1,
    StudyFieldId: 1,
    StreamId: 1
  })

});

const mongoose = require("mongoose");
//VERY IMPORTANT FOR SOME WINDOWS USERS
// const mongoURI = 'mongodb://127.0.0.1:27017/mongo-demo';
const mongoEndpoint = "mongodb://localhost/";
const dbName = "mobile-db";

mongoose
  .connect(mongoEndpoint + dbName)
  .then(() => console.log(`Connected to the ${dbName} db`))
  .catch((err) => console.log("ERROR IN CONNECTION TO DB", err));

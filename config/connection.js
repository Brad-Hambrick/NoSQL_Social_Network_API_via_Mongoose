const { connect, connection } = require("mongoose");

const connectionString =
  process.env.MONGODB_URI ||
  "mongodb://localhost:27017/nosql_social_network_api_via_mongoose";

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;

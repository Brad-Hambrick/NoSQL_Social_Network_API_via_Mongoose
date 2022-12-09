const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
// const db = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb://localhost/nosql_social_network_api_via_mongoose",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.listen(PORT, () => console.log(`Connected on localhost:${PORT}`));

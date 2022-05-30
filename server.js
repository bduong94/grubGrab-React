require("dotenv").config();
const express = require("express");
const cors = require("cors");
const compression = require("compression");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const path = require("path");
const dbParams = require("./config/db.config");

//Testing
console.log(dbParams);

// PG Database Setup
// const { Pool } = require("pg");
// const db = new Pool(dbParams);
// db.connect();
const db = require("./models");
db.sequelize.sync();

//Server set-up
const PORT = process.env.PORT || 8080;
const app = express();
const dev = app.get("env") !== "production";

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(cors());

//If not in development
if (!dev) {
  app.disable("x-powered-by");
  app.use(compression());
  app.use(morgan("common"));

  app.use(express.static(path.resolve(__dirname, "build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}

if (dev) {
  app.use(morgan("dev"));
}

//Start Server
app.listen(PORT, (err) => {
  if (err) throw err;

  console.log(`Listening on port: ${PORT}`);
});

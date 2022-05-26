const express = require("express");
const cors = require("cors");
const compression = require("compression");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const path = require("path");

//Server set-up
const PORT = process.env.PORT || 8080;
const app = express();
const dev = app.get("env") !== "production";

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

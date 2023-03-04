let express = require("express");
const res = require("express/lib/response");
let app = express();

app.get("/", (req, res) => {
  res.send("Hello Express");
});

module.exports = app;

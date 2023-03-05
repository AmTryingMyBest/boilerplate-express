let express = require("express");
const res = require("express/lib/response");
let app = express();
require("dotenv").config();

app.use(express.static(__dirname + "/public"));

absolutePath = __dirname + "/views/index.html";
app.get("/", (req, res) => {
  // res.send("Hello Express");
  res.sendFile(absolutePath);
});

app.get("/json", (req, res) => {
  const mySecret = process.env.MESSAGE_STYLE;

  if (mySecret == "uppercase") {
    res.json({ message: "HELLO JSON" });
  } else {
    res.json({ message: "Hello json" });
  }
});
module.exports = app;

let express = require("express");
const res = require("express/lib/response");
let app = express();
require("dotenv").config();

app.use(express.static(__dirname + "/public"));

app.use((req, res, next) => {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});

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

app.get(
  "/now",
  (req, res, next) => {
    req.time = new Date().toString();
    next();
  },
  (req, res) => {
    res.send({ time: req.time });
  }
);

app.get("/:word/echo", (req, res) => {
  const { word } = req.params;
  res.json({ echo: word });
});
module.exports = app;

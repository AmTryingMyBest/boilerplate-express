let express = require("express");
const res = require("express/lib/response");
let app = express();
let bodyParser = require("body-parser");
require("dotenv").config();

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json);

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

app.get("/name", (req, res) => {
  let firstName = req.query.first;
  let lastName = req.query.last;

  res.json({
    name: `${firstName} ${lastName}`,
  });
});

//get data from POST requests
app.post(PATH, (req, res) => {
  let string = req.body.first + " " + req.body.last;
  res.json({ name: string });
});
module.exports = app;

let express = require("express");
const res = require("express/lib/response");
let app = express();

app.use(express.static(__dirname + "/public"));

absolutePath = __dirname + "/views/index.html";
app.get("/", (req, res) => {
  // res.send("Hello Express");
  res.sendFile(absolutePath);
});

module.exports = app;

var express = require("express");

var app = express();

app.get("/", (req, res) => {
  res.send("Welcome to alAuth backend");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Server is listening on port: ", port);
});

module.exports = app;

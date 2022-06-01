const express = require("express");
const app = express();
const io = require("./clientConnection");

app.listen("9090", () => {
  console.log("Listening on port 9000");
});

const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.get("/", (req, res) => {
  res.send("MERN Chat App");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

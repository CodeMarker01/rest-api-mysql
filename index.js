const express = require("express");
const app = express();
const cor = require("cors");

//middleware
app.use(cor()); //cross port front to back
app.use(express.json());

//ROUTES

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

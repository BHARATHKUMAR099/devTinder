const express = require("express");
const app = express();



app.use("/test",(req,res) => {
  res.send("From the Testing");
});

app.use("/login",(req,res) => {
  res.send("From the login page");
});

app.use("/",(req,res) => {
  res.send("From the dashboard");
});

app.listen(7777,() => {
  console.log("Server is sucessfully listening on port 3000");
});
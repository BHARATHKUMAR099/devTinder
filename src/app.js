const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.post("/signup",async (req,res)=>{
  const user = new User({
    firstName:"Rohit",
    lastName:"Sharma",
    email:"rohit@gmail.com",
    password:"1234",
    age:23,
    gender:"Male",
  });

  try {
    await user.save();
    res.send("SignedIn successfully!!");
  }
  catch(err){
    res.status(400).send("Error sending the User : "+err.message);
  }
}); 

app.get("/userslogined", async (req, res) => {
  try {
    const users = await User.find();  
    res.json(users);  
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
});

connectDB()
  .then(()=>{
      console.log("Database is connected successfully");

      app.listen(7777,() => {
        console.log("Server is sucessfully listening on port 7777");
      });
    })
  .catch((err)=>{
      console.log("connection not established");
  });

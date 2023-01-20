const express = require("express");
const { connection } = require("./config/db");

const { UserModel } = require("./Modal/User.Modal");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});
app.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  const new_user = new UserModel({
    email,
    password,
  });
  await new_user.save();
  res.send("Sign up Successfull");
});

app.listen(8080, async () => {
  try {
    await connection;
    console.log("Listening to port 8080");
  } catch (err) {
    console.log(err);
  }
});

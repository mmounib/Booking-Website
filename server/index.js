const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const app = express();
const cors = require("cors");
const User = require("./models/models");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

require("dotenv").config();

mongoose.connect(process.env.MONGO_CONNECT);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

app.post("/registerUser", async (req, res) => {
  const { name, email, password } = req.body;

  const userModel = await User.create({
    name,
    email,
    password: await bcrypt.hash(password, 10),
  });

  res.json(userModel);
});

app.post("/checkUser", async (req, res) => {
  const { email, password } = req.body;
  const find = await User.findOne({ email });

  if (find) {
    const compare = await bcrypt.compare(password, find.password);

    if (compare) {
      jwt.sign(
        { email: find.email, id: find._id },
        process.env.TOKEN_SECRET,
        (err, token) => {
          if (err) throw err;
          res.cookie("accessToken", token, { httpOnly: true }).json(find);
        }
      );
    } else res.json("Incorrect Password");
  } else res.json("Email Not Found");
});

// Verify AccessToken
app.get("/verify", (req, res) => {
  const { accessToken } = req.cookies;
  if (accessToken)
    jwt.verify(
      accessToken,
      process.env.TOKEN_SECRET,
      {},
      async (err, users) => {
        const addNameUsers = await User.findById(users.id);

        if (err) throw err;
        res.json(addNameUsers);
      }
    );
  else res.json(null);
});

app.listen(3000, () => console.log(`app listening on port 3000!`));

// cehIqBJCHoEExpxW

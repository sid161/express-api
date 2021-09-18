const express = require("express");

const app = express();

const cors = require("cors");
const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const { urlencoded } = require("body-parser");

const postRoute = require("./api/routes/post");
const userRoute = require("./api/routes/user");
const fileUpload = require('express-fileupload')


mongoose.connect(
  "mongodb+srv://siddharth:siddharth@cluster0.euxzw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);

mongoose.connection.on("error", (err) => {
  console.log("connection failed");
});

mongoose.connection.on("connected", (connected) => {
  console.log("Connected with database");
});

app.use(fileUpload({
  useTempFiles:true
}))


app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use("/post", postRoute);
app.use("/user", userRoute);

app.use((req, res, next) => {
  res.status(404).json({ error: "bad request" });
});

app.use((req, res, next) => {
  res.status(200).json({ message: "Its running" });
});

module.exports = app;

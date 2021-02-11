const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const port = process.env.PORT || 5555;

const app = express();

app.use(cors());
// express.json() is for the request
app.use(express.json());
app.use(express.static(path.join(__dirname, "client/build")));

// in .env file, key=value pairs accessed through process.env
console.log(process.env.PORT);

app.use("/api/*", (_, res) => {
  res.json({ data: "The API is ALIVE 👺" });
});

app.use("*", (_, res) => {
  // send back index.html so react router will work
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening on ${port}`);
});

const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5555;

console.log("web 38 rocks");
console.log(__dirname);
console.log(process.env.LADY);
console.log(process.env.FOO);
console.log(process.env.ALWAYS);
console.log(process.env.PORT);

app.use("/api/*", (_, res) => {
  res.json({ data: "web 38 rocks" });
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening on ${port}`);
});

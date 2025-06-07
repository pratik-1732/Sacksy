const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("Hey");
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}...`);
});

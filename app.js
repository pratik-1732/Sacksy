const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const db = require("./config/mongooseConnection");

// router req
const ownersRouter = require("./routes/ownersRouter");
const usersRouter = require("./routes/usersRouter");
const productsRouter = require("./routes/productsRouter");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// routers
app.use("/owners", ownersRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}...`);
});

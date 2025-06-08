const express = require("express");
const router = express.Router();
const ownerModel = require("../models/ownerModel");

if (process.env.NODE_ENV === "development") {
  router.post("/create", async (req, res) => {
    const owners = await ownerModel.find();
    if (owners.length > 1) {
      res.status(403).send("you cann't create new owner...");
    }

    const { fullname, email, password } = req.body;
    const newOwner = await ownerModel.create({
      fullname,
      email,
      password,
    });

    res.status(201).send(newOwner);
  });
}

router.get("/", (req, res) => {
  res.send("owner route - it's working...");
});

module.exports = router;

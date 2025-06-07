const { name } = require("ejs");
const mongoose = require("mongoose");

mongoose.connect(`mongodb://localhost:27017/sacksy`);

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  cart: {
    type: Array,
    default: [],
  },
  isAdmin: Boolean,
  orders: Array,
  contact: Number,
  picture: String,
});

module.exports = mongoose.model("user", userSchema);

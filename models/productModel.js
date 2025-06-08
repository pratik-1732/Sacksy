const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  fullname: String,
  price: Number,
  discount: {
    type: Number,
    default: 0,
  },
  bgcolor: String,
  panelcolor: String,
  textcolor: String,
  image: String,
});

module.exports = mongoose.model("product", productSchema);

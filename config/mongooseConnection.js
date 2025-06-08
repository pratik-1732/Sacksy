const mongoose = require("mongoose");

mongoose
  .connect(`mongodb://localhost:27017/sacksy`)
  .then(() => {
    console.log("Db connected...");
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = mongoose.connection;

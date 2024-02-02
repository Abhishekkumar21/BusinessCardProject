const mongoose = require("mongoose");

const cardDataDBSchema = mongoose.Schema({
  name: String,
  description: String,
  interests: [String],
  socialsLinks: [String],
});

const BusinessCard = mongoose.model("businesscard", cardDataDBSchema);

module.exports = {
  BusinessCard,
};

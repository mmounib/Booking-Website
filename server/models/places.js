const mongoose = require("mongoose");

const placeSchema = mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: String,
  address: String,
  images: [String],
  description: String,
  perks: String,
  extraInfo: String,
  checkIn: Number,
  checkOut: Number,
  maxGuests: Number,
});

const placeModel = mongoose.model("Places", placeSchema);

module.exports = placeModel;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MendListingSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
  },
});

module.exports = MendListing = mongoose.model(
  "MendListings",
  MendListingSchema
);

const mongoose = require("mongoose");

// Schema
const reviewSchema = mongoose.Schema(
  {
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    listing: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Listing",
      required: true,
    },
    reviewTitle: {
      type: String,
      required: true,
    },
    reviewBody: {
      type: String,
    },
  },
  { timestamps: true },
);

reviewSchema.index(
  { user: 1, listing: 1 },
  { unique: true }
);

//  Model
const Review = mongoose.model("Review", reviewSchema);

// Export Model

module.exports = Review;

const mongoose = require("mongoose");

const MobileSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "mobile title is required"],
      maxlength: [
        40,
        "The title length should be no more than 40 characters!!",
      ],
    },
    type: {
      type: String,
      required: [true, "A mobile type is required!!"],
      enum: ["Iphone", "IPad", "Mac", "Accessories"],
    },
    boxArt: {
      type: String,
      required: [true, "mobile boxArt is required"],
    },
    price: {
      type: String,
      required: [true, "mobile price is required"],
    },
    details: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Mobile = mongoose.model("mobile", MobileSchema);
module.exports = Mobile;

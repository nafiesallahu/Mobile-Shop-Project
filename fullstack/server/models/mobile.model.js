const mongoose = require("mongoose");

const MobileSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "mobile title is required"],
      minLength: [3, "Title must be at least 3 characters. "]
    },
    type: {
      type: String,
      required: [true, "A mobile type is required!!"],
      enum: ["Iphone", "IPad", "Mac", "Accessories"]
    },
    boxArt: {
      type: String,
      required: [true, "Mobile image is required"],
      minLength: [10, "Image must be at least 10 characters. "]
    },
    price: {
      type: String,
      required: [true, "mobile price is required"],
      minLength: [2, "Title must be at least 2 characters. "]
    },
    details: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

const Mobile = mongoose.model("mobile", MobileSchema);
module.exports = Mobile;

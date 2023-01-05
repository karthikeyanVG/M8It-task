const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    image: {
        type:Array,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = Image = mongoose.model("Image", userSchema);

const mongoose = require("mongoose");
const candidateModel = mongoose.Schema(
  {
    name: {
      type: String
    },
    position: {
      type: String
    },
    point: {
      type: Number
    },
    toggle: {
      type: Boolean,
      
    },
    avatar: {
      type: String
    },
      who: {
      type: String
    },
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("candidates", candidateModel);

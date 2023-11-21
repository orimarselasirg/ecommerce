const { Schema, model } = require("mongoose");

const cart = new Schema({
  products: {
    type: [],
    required: true,
  },
  transaction: {
    type: String,
    required: true,
  },
  isApproved: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: false,
  },
});

module.exports = model("Cart", cart);

const { Schema, model } = require("mongoose");

const product = new Schema({
  description: {
    type: String,
    required: true,
  },
  um: {
    type: String,
    required: true,
  },
  isService: {
    type: Boolean,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
});

module.exports = model("Product", product);

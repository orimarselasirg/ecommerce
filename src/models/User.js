const { Schema, model } = require("mongoose");

const user = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  identification: {
    type: String,
    unique: true,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
});

module.exports = model("User", user);

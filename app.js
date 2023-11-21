require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { API_VERSION } = require("./src/util/constans");
const app = express();
const product = require("./src/routes/product.route");
const cart = require("./src/routes/cart.route");

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use(`${API_VERSION}/`, product);
app.use(`${API_VERSION}/`, cart);

module.exports = { app };

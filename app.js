require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const { API_VERSION } = require("./src/util/constans");
const app = express();
const product = require("./src/routes/product.route");
const cart = require("./src/routes/cart.route");
const user = require("./src/routes/user.route");
const payment = require("./src/routes/payment.route");
const notification = require("./src/routes/notificator.route");

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
    createParentPath: true,
  })
);

app.use(`${API_VERSION}/`, product);
app.use(`${API_VERSION}/`, cart);
app.use(`${API_VERSION}/`, user);
app.use(`${API_VERSION}/`, payment);
app.use(`${API_VERSION}/`, notification);

module.exports = { app };

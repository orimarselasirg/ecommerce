const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: process.env.NODEMAILER_HOST,
  port: 465,
  secure: true,
  auth: {
    user: process.env.NODEMAILER_USER_MAIL,
    pass: process.env.NODEMAILER_USER_PASSWORD,
  },
});

transporter.verify().then(() => {
  console.log("Listo para enviar emails");
});

module.exports = { transporter };

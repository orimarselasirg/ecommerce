const mercadopago = require("mercadopago");
require("dotenv").config();

mercadopago.configure({
  access_token: process.env.ACCESS_TOKEN_MERCADOPAGO,
});

const payment = async (items, payer) => {
  let preference = {
    items: items,
    payer: payer,
    back_urls: {
      success: "http://localhost:3000/home/cart",
      failure: "http://localhost:3000/home/cart",
      pending: "",
    },
    auto_return: "approved",
    payment_methods: {
      excluded_payment_methods: [],
      excluded_payment_types: [],
      installments: 1,
    },
    notification_url: "https://www.test.com",
    statement_descriptor: "My bussiness",
    external_reference: "Reference_1234",
    expires: true,
    expiration_date_from: "2023-11-01T12:00:00.000-04:00",
    expiration_date_to: "2023-12-28T12:00:00.000-04:00",
  };
  try {
    const preferences = await mercadopago.preferences.create(preference);
    return preferences.response;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { payment };

const mercadopago = require("mercadopago");

mercadopago.configure({
  access_token:
    "APP_USR-959457018190036-112414-29acc897c6357c03bdf4b2d1ec6422e3-1564535318",
});

const payment = async (items, payer) => {
  let preference = {
    // items: [
    //   {
    //     id: "item-ID-1234",
    //     title: "Meu produto",
    //     currency_id: "USD",
    //     picture_url: "https://www.mercadopago.com/org-img/MP3/home/logomp3.gif",
    //     description: "Descrição do Item",
    //     category_id: "art",
    //     quantity: 1,
    //     unit_price: 100,
    //   },
    // ],
    items: items,
    // payer: {
    //   name: "João",
    //   surname: "Silva",
    //   email: "user@email.com",
    //   phone: {
    //     area_code: "11",
    //     number: 44444444,
    //   },
    //   identification: {
    //     type: "CPF",
    //     number: "19119119100",
    //   },
    //   address: {
    //     street_name: "Street",
    //     street_number: 123,
    //     zip_code: "06233200",
    //   },
    // },
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
    console.log(preferences.response.id);
    return preferences.response;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { payment };

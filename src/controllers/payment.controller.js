const { payment } = require("../services/payment.service");

const postPaymentController = async (req, res) => {
  try {
    const { items, payer } = req.body;
    res.status(200).json(await payment(items, payer));
  } catch (error) {
    console.log(error);
  }
};

const getPaymentDataController = async (req, res) => {
  try {
    res.status(200).json(req.query);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { postPaymentController, getPaymentDataController };

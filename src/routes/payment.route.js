const { Router } = require("express");
const router = Router();
const {
  postPaymentController,
  getPaymentDataController,
} = require("../controllers/payment.controller");

router.post("/create_preference", postPaymentController);
router.get("/payment_info", getPaymentDataController);

module.exports = router;

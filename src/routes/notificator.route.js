const { Router } = require("express");
const router = Router();

const {
  notificationController,
} = require("../controllers/notificator.controller");

router.post("/notification", notificationController);

module.exports = router;

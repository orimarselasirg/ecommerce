const { Router } = require("express");
const router = Router();
const {
  getCartsController,
  getCartByIdController,
  createCartController,
  deleteCartController,
} = require("../controllers/cart.controller");

router.get("/carts", getCartsController);
router.post("/carts/:userId", createCartController);
router.get("/carts/:cartId", getCartByIdController);
router.delete("/carts/:cartId", deleteCartController);

module.exports = router;

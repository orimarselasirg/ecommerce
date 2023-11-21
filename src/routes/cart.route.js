const { Router } = require("express");
const router = Router();
const {
  getCartsController,
  getCartByIdController,
  createCartController,
  deleteCartController,
  getCartByUsersController,
} = require("../controllers/cart.controller");

router.get("/carts", getCartsController);
router.get("/carts-by-user/:userId", getCartByUsersController);
router.post("/carts/:userId", createCartController);
router.get("/carts/:cartId", getCartByIdController);
router.delete("/carts/:cartId", deleteCartController);

module.exports = router;

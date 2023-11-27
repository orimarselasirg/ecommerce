const { Router } = require("express");
const router = Router();
const {
  getCartsController,
  getCartByIdController,
  createCartController,
  deleteCartController,
  getCartByUsersController,
  modifyCartController,
} = require("../controllers/cart.controller");

router.get("/carts", getCartsController);
router.get("/carts-by-user/:email", getCartByUsersController);
router.post("/carts/:userId", createCartController);
router.put("/carts-by-id/:cartId", modifyCartController);
router.get("/carts/:cartId", getCartByIdController);
router.delete("/carts/:cartId", deleteCartController);

module.exports = router;

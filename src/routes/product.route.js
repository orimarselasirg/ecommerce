const { Router } = require("express");
const router = Router();
const {
  getProductsController,
  getProductByIdController,
  createProductController,
  modifyProductController,
  deleteProductController,
} = require("../controllers/product.controller");

router.get("/products", getProductsController);
router.get("/products/:productId", getProductByIdController);
router.post("/products", createProductController);
router.put("/products/:productId", modifyProductController);
router.delete("/products/:productId", deleteProductController);

module.exports = router;

const { Router } = require("express");
const router = Router();
const {
  getProductsController,
  getProductByIdController,
  createProductController,
  modifyProductController,
  deleteProductController,
  saveProductImageController,
} = require("../controllers/product.controller");

router.get("/products", getProductsController);
router.get("/products/:productId", getProductByIdController);
router.post("/products", createProductController);
router.post("/products/image", saveProductImageController);
router.put("/products/:productId", modifyProductController);
router.delete("/products/:productId", deleteProductController);

module.exports = router;

const { ERROR } = require("../util/constans");
const {
  getProducts,
  getProductById,
  createProduct,
  modifyProduct,
  deleteProduct,
} = require("../services/products.service");

const getProductsController = async (req, res) => {
  try {
    res.status(200).json(await getProducts());
  } catch (error) {
    console.log({
      name: error.name,
      path: "controller",
      message: error.message,
    });
    res.status(ERROR.BAD_REQUEST).json({
      name: error.name,
      message: error.message,
    });
  }
};

const getProductByIdController = async (req, res) => {
  const { productId } = req.params;
  try {
    res.status(200).json(await getProductById(productId));
  } catch (error) {
    console.log({
      name: error.name,
      path: "controller",
      message: error.message,
    });
    res.status(ERROR.BAD_REQUEST).json({
      name: error.name,
      message: error.message,
    });
  }
};

const createProductController = async (req, res) => {
  try {
    res.status(200).json(await createProduct(req.body));
  } catch (error) {
    console.log({
      name: error.name,
      path: "controller",
      message: error.message,
    });
    res.status(ERROR.BAD_REQUEST).json({
      name: error.name,
      message: error.message,
    });
  }
};

const modifyProductController = async (req, res) => {
  const { productId } = req.params;
  try {
    res.status(200).json(await modifyProduct(productId, req.body));
  } catch (error) {
    console.log({
      name: error.name,
      path: "controller",
      message: error.message,
    });
    res.status(ERROR.BAD_REQUEST).json({
      name: error.name,
      message: error.message,
    });
  }
};

const deleteProductController = async (req, res) => {
  const { productId } = req.params;
  try {
    res.status(200).json(await deleteProduct(productId));
  } catch (error) {
    console.log({
      name: error.name,
      path: "controller",
      message: error.message,
    });
    res.status(ERROR.BAD_REQUEST).json({
      name: error.name,
      message: error.message,
    });
  }
};

module.exports = {
  getProductsController,
  getProductByIdController,
  createProductController,
  modifyProductController,
  deleteProductController,
};

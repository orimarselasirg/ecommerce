const Products = require("../models/Products");
const { SUCCESS, ERROR, errorResponse } = require("../util/constans");
const { uploadImageCloud } = require("../util/cloudinary");

const getProducts = async () => {
  const productsFound = await Products.find();
  try {
    if (productsFound) {
      return {
        status: SUCCESS.SUCCESS,
        data: productsFound,
      };
    }
  } catch (error) {
    errorResponse(SUCCESS.NOT_SUCCESS, "service", "Productos encontrados");
  }
};

const getProductById = async (productId) => {
  const productFound = await Products.findOne({ _id: productId });
  try {
    if (productFound) {
      return {
        status: SUCCESS.SUCCESS,
        data: productFound,
      };
    }
  } catch (error) {
    errorResponse(SUCCESS.NOT_SUCCESS, "service", "Producto no encontrado");
  }
};

const createProduct = async (product) => {
  const newProduct = await Products.create(product);

  try {
    if (newProduct) {
      return {
        status: SUCCESS.SUCCESS,
        message: "Producto creado",
        data: newProduct,
      };
    }
  } catch (error) {
    errorResponse(
      SUCCESS.NOT_SUCCESS,
      "service",
      "Producto no pudo ser creado"
    );
  }
};

const saveProductImage = async (tempFilePath) => {
  try {
    const secure_url = await uploadImageCloud(tempFilePath);
    return {
      status: SUCCESS.SUCCESS,
      data: secure_url,
    };
  } catch (error) {
    // errorResponse(SUCCESS.NOT_SUCCESS, "service", "Imagen no pudo ser creada");
    console.log(error);
  }
};

const modifyProduct = async (productId, product) => {
  const modifiedProduct = await Products.findOneAndUpdate(
    { _id: productId },
    product
  );
  try {
    if (modifiedProduct) {
      return {
        status: SUCCESS.SUCCESS,
        message: "Producto modificado",
        data: modifiedProduct,
      };
    }
  } catch (error) {
    errorResponse(
      SUCCESS.NOT_SUCCESS,
      "service",
      "Producto no pudo ser modificado"
    );
  }
};

const deleteProduct = async (productId) => {
  const deletedProduct = await Products.deleteOne({ _id: productId });
  try {
    if (deletedProduct) {
      return {
        status: SUCCESS.SUCCESS,
        message: "Producto eliminado",
        data: deletedProduct,
      };
    }
  } catch (error) {
    errorResponse(
      SUCCESS.NOT_SUCCESS,
      "service",
      "Producto no pudo ser eliminado"
    );
  }
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  modifyProduct,
  deleteProduct,
  saveProductImage,
};

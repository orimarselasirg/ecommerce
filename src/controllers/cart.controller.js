const {
  getCarts,
  getCartById,
  createCart,
  deleteCart,
  getCartByUsers,
  modifyCart,
} = require("../services/cart.service");

const { controllerResponse } = require("../util/response");
const { ERROR } = require("../util/constans");

const getCartsController = async (req, res) => {
  try {
    res.status(200).json(await getCarts());
  } catch (error) {
    res
      .status(ERROR.BAD_REQUEST)
      .send(controllerResponse(error.name, "controller", error.message));
  }
};

const getCartByIdController = async (req, res) => {
  try {
    res
      .status(200)
      .json(await getCartById(req.params.userId, req.params.cartId));
  } catch (error) {
    res
      .status(ERROR.BAD_REQUEST)
      .send(controllerResponse(error.name, "controller", error.message));
  }
};

const getCartByUsersController = async (req, res) => {
  try {
    res.status(200).json(await getCartByUsers(req.params.email));
  } catch (error) {
    res
      .status(ERROR.BAD_REQUEST)
      .send(controllerResponse(error.name, "controller", error.message));
  }
};

const createCartController = async (req, res) => {
  try {
    res.status(200).send(await createCart(req.params.userId, req.body));
  } catch (error) {
    res
      .status(ERROR.BAD_REQUEST)
      .send(controllerResponse(error.name, "controller", error.message));
  }
};

const modifyCartController = async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await modifyCart(
          req.params.cartId,
          req.body.isApproved,
          req.body.transaction
        )
      );
  } catch (error) {
    res
      .status(ERROR.BAD_REQUEST)
      .send(controllerResponse(error.name, "controller", error.message));
  }
};

const deleteCartController = async (req, res) => {
  try {
    res.status(200).json(await deleteCart(req.params.cartId));
  } catch (error) {
    res
      .status(ERROR.BAD_REQUEST)
      .send(controllerResponse(error.name, "controller", error.message));
  }
};

module.exports = {
  getCartsController,
  getCartByIdController,
  createCartController,
  deleteCartController,
  getCartByUsersController,
  modifyCartController,
};

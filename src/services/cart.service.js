const Cart = require("../models/Cart");
const User = require("../models/User");
const { SUCCESS } = require("../util/constans");
const { errorResponse } = require("../util/response");
const { payment } = require("./payment.service");

const getCarts = async (userId) => {
  const carts = await Cart.find();
  try {
    if (carts) {
      return {
        status: SUCCESS.SUCCESS,
        data: carts,
      };
    }
  } catch (error) {
    errorResponse(
      SUCCESS.NOT_SUCCESS,
      "service",
      "Listado de pedidos encontrados"
    );
  }
};

const getCartById = async (userId, cartId) => {
  const cart = await Cart.findOne({ userId: userId, _id: cartId });
  try {
    if (cart) {
      return {
        status: SUCCESS.SUCCESS,
        data: cart,
      };
    }
  } catch (error) {
    errorResponse(SUCCESS.NOT_SUCCESS, "service", "Pedido no encontrado");
  }
};

const getCartByUsers = async (email) => {
  const carts = await Cart.find({ userId: email });
  try {
    if (carts) {
      return {
        status: SUCCESS.SUCCESS,
        data: carts,
      };
    }
  } catch (error) {
    errorResponse(
      SUCCESS.NOT_SUCCESS,
      "service",
      "Listado de pedidos no encontrados"
    );
  }
};

const createCart = async (userId, cart) => {
  const userFound = await User.findOne({ identification: userId });

  const newCart = await Cart.create({
    products: [...cart.products],
    userId: userId,
    transaction: cart.transaction,
    isApproved: cart.isApproved,
    total: cart.total,
    status: true,
  });
  if (newCart) {
    return {
      status: SUCCESS.SUCCESS,
      message: "Pedido creado",
      data: newCart,
    };
  } else {
    errorResponse(SUCCESS.NOT_SUCCESS, "service", "Pedido no pudo ser creado");
  }
};

const modifyCart = async (_id, isApproved, transaction) => {
  await Cart.findOneAndUpdate(
    { _id: _id },
    { isApproved: isApproved, transaction: transaction }
  );
  const cartFoundModified = await Cart.findOne({ _id: _id });
  return cartFoundModified;
};

const deleteCart = async (cartId) => {
  const logicalDeleteCart = await Cart.findOneAndUpdate(
    { _id: cartId },
    { status: false }
  );
  try {
    if (logicalDeleteCart) {
      return {
        status: SUCCESS.SUCCESS,
        data: logicalDeleteCart,
      };
    }
  } catch (error) {
    errorResponse(
      SUCCESS.NOT_SUCCESS,
      "service",
      "Pedido no pudo ser eliminado"
    );
  }
};

module.exports = {
  getCarts,
  getCartById,
  createCart,
  deleteCart,
  getCartByUsers,
  modifyCart,
};

const User = require("../models/User");
const { SUCCESS } = require("../util/constans");
const { errorResponse } = require("../util/response");

const getUsers = async () => {
  const usersFound = await User.find();
  const usersActive = usersFound.filter((user) => user.status);
  try {
    if (usersFound) {
      return {
        status: SUCCESS.SUCCESS,
        data: usersActive,
      };
    }
  } catch (error) {
    errorResponse(SUCCESS.NOT_SUCCESS, "service", "Usuarios encontrados");
  }
};

const getUserById = async (userId) => {
  const userFound = await User.findOne({ _id: userId });
  try {
    if (userFound) {
      return {
        status: SUCCESS.SUCCESS,
        data: userFound,
      };
    }
  } catch (error) {
    errorResponse(SUCCESS.NOT_SUCCESS, "service", "Usuario no encontrado");
  }
};
const getUserByEmail = async (email) => {
  console.log(email);
  const userFound = await User.findOne({ email: email });
  try {
    if (userFound) {
      return {
        status: SUCCESS.SUCCESS,
        data: userFound,
      };
    }
  } catch (error) {
    errorResponse(SUCCESS.NOT_SUCCESS, "service", "Usuario no encontrado");
  }
};

const createUser = async (user) => {
  const userFound = await User.findOne({ email: user.email });
  if (userFound) {
    return {
      status: SUCCESS.NOT_SUCCESS,
      message: "Usuario ya registrado",
    };
  }
  const newUser = await User.create(user);
  try {
    if (newUser) {
      return {
        status: SUCCESS.SUCCESS,
        message: "Usuario creado",
        data: newUser,
      };
    }
  } catch (error) {
    errorResponse(SUCCESS.NOT_SUCCESS, "service", "Usuario no pudo ser creado");
  }
};

const modifyUser = async (userId, user) => {
  const modifiedUser = await User.findOneAndUpdate(
    { identification: userId },
    user
  );
  try {
    if (modifiedUser) {
      return {
        status: SUCCESS.SUCCESS,
        message: "Usuario modificado",
        data: modifiedUser,
      };
    }
  } catch (error) {
    errorResponse(
      SUCCESS.NOT_SUCCESS,
      "service",
      "Usuario no pudo ser modificado"
    );
  }
};

const deleteUser = async (userId) => {
  const deletedUser = await User.findOneAndUpdate(
    { identification: userId },
    { status: false }
  );
  try {
    if (deletedUser) {
      return {
        status: SUCCESS.SUCCESS,
        message: "Usuario eliminado",
        data: deletedUser,
      };
    }
  } catch (error) {
    errorResponse(
      SUCCESS.NOT_SUCCESS,
      "service",
      "Usuario no pudo ser eliminado"
    );
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  modifyUser,
  deleteUser,
  getUserByEmail,
};

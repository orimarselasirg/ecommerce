const {
  getUsers,
  getUserById,
  createUser,
  modifyUser,
  deleteUser,
  getUserByEmail,
} = require("../services/user.services");
const { ERROR } = require("../util/constans");
const { controllerResponse } = require("../util/response");

const getUserController = async (req, res) => {
  try {
    res.status(200).json(await getUsers());
  } catch (error) {
    res
      .status(ERROR.BAD_REQUEST)
      .json(controllerResponse(error.name, "controller", error.message));
  }
};

const getUserByIdController = async (req, res) => {
  try {
    res.status(200).json(await getUserById(req.params.id));
  } catch (error) {
    res
      .status(ERROR.BAD_REQUEST)
      .json(controllerResponse(error.name, "controller", error.message));
  }
};
const getUserByEmailController = async (req, res) => {
  console.log(req.params.email);
  try {
    res.status(200).json(await getUserByEmail(req.params.email));
  } catch (error) {
    res
      .status(ERROR.BAD_REQUEST)
      .json(controllerResponse(error.name, "controller", error.message));
  }
};

const createUserController = async (req, res) => {
  try {
    res.status(200).json(await createUser(req.body));
  } catch (error) {
    res
      .status(ERROR.BAD_REQUEST)
      .json(controllerResponse(error.name, "controller", error.message));
  }
};

const modifyUserController = async (req, res) => {
  try {
    res.status(200).json(await modifyUser(req.params.userId, req.body));
  } catch (error) {
    res
      .status(ERROR.BAD_REQUEST)
      .json(controllerResponse(error.name, "controller", error.message));
  }
};

const deleteUserController = async (req, res) => {
  try {
    res.status(200).json(await deleteUser(req.params.userId));
  } catch (error) {
    res
      .status(ERROR.BAD_REQUEST)
      .json(controllerResponse(error.name, "controller", error.message));
  }
};

module.exports = {
  getUserController,
  getUserByIdController,
  createUserController,
  modifyUserController,
  deleteUserController,
  getUserByEmailController,
};

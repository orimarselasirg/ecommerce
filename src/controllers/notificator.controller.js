const { notification } = require("../services/notification.service");

const notificationController = async (req, res) => {
  try {
    const { email, username, transaction, total, status } = req.body;
    res
      .status(200)
      .json(await notification(email, username, transaction, total, status));
  } catch (error) {
    console.log(error);
    throw new Error({
      name: error.name,
      path: "controller",
      message: error.message,
    });
  }
};

module.exports = { notificationController };

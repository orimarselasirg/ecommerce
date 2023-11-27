const { mailTemplate } = require("../util/mailTemplate");
const { transporter } = require("../util/notification");

const notification = async (
  email,
  username = "Cliente",
  transaction,
  total,
  status
) => {
  try {
    const infoNotification = await transporter.sendMail({
      from: '"Byte4bit Ecommerce" <ramirogrisales@gmail.com>', // sender address
      to: email, // list of receivers
      subject: "Notificación de compra ✔", // Subject line
      // text: "Hello world?", // plain text body
      html: mailTemplate(username, status, transaction, total), // html body
    });
    return infoNotification;
  } catch (error) {
    console.log(error);
    throw new Error({
      status: error.status,
      message: error.message,
    });
  }
};

module.exports = { notification };

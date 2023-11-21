const mongoose = require("mongoose");
const { DB_USERNAME, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const dbConnect = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`
      // {
      //   ssl: false,
      //   sslValidate: true,
      //   useNewUrlParser: true,
      // }
    );
    console.log("Mongo database connection successful");
  } catch (error) {
    console.log(error);
    throw new Error("Connection database error");
  }
};

module.exports = { dbConnect };

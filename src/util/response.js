const errorResponse = (isSuccess, path, message = "Contact with developer") => {
  return {
    status: isSuccess,
    path: path,
    message: message,
  };
};

const controllerResponse = (name, path, message) => {
  console.log({
    name,
    path,
    message,
  });
  return {
    name: name,
    message: message,
  };
};

module.exports = { errorResponse, controllerResponse };

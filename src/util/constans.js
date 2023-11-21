const ERROR = {
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  BAD_REQUEST: 400,
};

const SUCCESS = {
  SUCCESS: true,
  NOT_SUCCESS: false,
  CREATE: "Creado",
  MODIFIED: "Modificado",
  DELETE: "Eliminado",
};

const API_VERSION = "/api/v1";

module.exports = { ERROR, SUCCESS, API_VERSION };

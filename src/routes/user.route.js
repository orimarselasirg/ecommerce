const { Router } = require("express");
const router = Router();
const {
  getUserController,
  getUserByIdController,
  createUserController,
  modifyUserController,
  deleteUserController,
  getUserByEmailController,
} = require("../controllers/user.controller");

router.get("/users", getUserController);
router.post("/users", createUserController);
// router.get("/users/:userId", getUserByIdController);
router.get("/users/:email", getUserByEmailController);
router.put("/users/:userId", modifyUserController);
router.delete("/users/:userId", deleteUserController);

module.exports = router;

const router = require("express").Router();
const {
  getUser,
  newUser,
  deleteUser,
} = require("../controllers/user-controller");

router.get("/user", getUser);

router.post("/user", newUser);

router.delete("/user", deleteUser);

// MORE CONSISE CODE
// const userController = require("../controllers/user-controller");

// router
//   .route("/user")
//   .get(userController.getUser)
//   .post(userController.newUser)
//   .delete(userController.deleteUser);

module.exports = router;

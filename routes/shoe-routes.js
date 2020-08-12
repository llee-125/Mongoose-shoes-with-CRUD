const router = require("express").Router();
const {
  getShoe,
  newShoe,
  editShoe,
  addColorway,
  removeColorway,
  addLike,
  deleteLike,
} = require("../controllers/shoe-controller");

router.get("/shoes", getShoe);
router.post("/shoes", newShoe);
router.put("/shoes", editShoe);

router.put("/shoes/like", addLike);
router.delete("/shoes/like", deleteLike);

// MORE CONCISE CODE
// const shoeController = require("../controllers/shoe-controller");

// router
//   .route("/shoes")
//   .get(shoeController.getShoe)
//   .post(shoeController.newShoe)
//   .put(shoeController.editShoe);

module.exports = router;

const express = require("express");
const router = express.Router();
const controller = require("../controllers/reviewController");


router.get("/:juegoId", controller.getReviews);
router.post("/", controller.addReview);
router.put("/:id", controller.updateReview);
router.delete("/:id", controller.deleteReview);


module.exports = router;
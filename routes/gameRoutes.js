const express = require("express");
const router = express.Router();
const controller = require("../controllers/gameController");

router.get("/", controller.getGames);
router.post("/", controller.addGame);
router.put("/:id", controller.updateGame);
router.delete("/:id", controller.deleteGame);

module.exports = router;
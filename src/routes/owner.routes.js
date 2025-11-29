const router = require("express").Router();
const c = require("../controllers/owner.controller");

router.get("/", c.getOwners);
router.get("/:id", c.getOwner);
router.patch("/:id/master", c.setMaster);
router.patch("/:id/favorite", c.setFavorite);

module.exports = router;

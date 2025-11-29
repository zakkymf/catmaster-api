const router = require("express").Router();
const c = require("../controllers/owner.controller");

router.get("/", c.getOwners);
router.get("/:id", c.getOwner);
router.patch("/:id/master", c.setMaster);

module.exports = router;

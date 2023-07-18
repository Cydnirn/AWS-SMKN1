const { router } = require("$dependency");
const TypeController = require("$controller/TypeController");

router.route("/all").get(async (req, res) => {
    await TypeController.getTypeAll(req, res);
});

router.route("/id/:type").get(async (req, res) => {
    await TypeController.getType(req, res);
});

module.exports = router;

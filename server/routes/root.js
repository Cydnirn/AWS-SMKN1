const { router } = require("$dependency");
const TypeController = require("$controller/TypeController");

router
    .route("/")
    .post(async (req, res) => await TypeController.initType(req, res));

module.exports = router;

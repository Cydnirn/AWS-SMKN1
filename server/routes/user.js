const { router } = require("$dependency");
const UserController = require("$controller/UserController");

router
    .route("/")
    .get(async (req, res) => {
        await UserController.getUser(req, res);
    })
    .post(async (req, res) => {
        await UserController.insertUser(req, res);
    })
    .delete(async (req, res) => {
        await UserController.deleteUser(req, res);
    });

module.exports = router;

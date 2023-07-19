const User = require("$model/UserSchema");
const { Type } = require("$model/TypeSchema");
const { responseSuccess, responseFailed } = require("$modules/responseFormat");
const { createError } = require("$modules/returnFormat");
const { generateIdHash } = require("$modules/idHelper");

async function getUser(req, res) {
    try {
        const { username } = req.query;
        let data;
        if (username != undefined || username != null) {
            console.log(username);
            data = await User.find({
                userName: { $regex: username, $options: "i" },
            })
                .lean()
                .exec();
            if (!data.length) throw createError("Username doesn't exist", 404);
            return responseSuccess(res, 200, { data: data });
        }
        data = await User.find({});
        if (!data) throw createError("This database is still empty");
        responseSuccess(res, 200, { data: data });
    } catch (err) {
        responseFailed(res, err.statusCode, err.message);
    }
}

async function insertUser(req, res) {
    try {
        const { username, type } = req.body;
        let typeList = await Type.find({}, "_id").lean().exec();
        typeList = typeList.map((type) => type._id);
        let id = await generateIdHash(User);
        if (typeList.includes(type) == false)
            throw createError("Type doesn't exist", 400);
        let newUser = new User({
            _id: id,
            userName: username,
            type: type,
        });
        let newUserInsert = await newUser.save();
        if (!newUserInsert) {
            throw createError(
                "Internal Server Error - Failed at Creating new User",
                500
            );
        }
        await Type.findByIdAndUpdate(type, {
            $push: {
                userList: {
                    _id: id,
                    userName: username,
                },
            },
            $inc: {
                totalMember: 1,
            },
        });
        responseSuccess(res, 201, "User successfully created!");
    } catch (err) {
        responseFailed(res, err.statusCode, err.message);
    }
}

async function deleteUser(req, res) {
    try {
        const { id } = req.body;
        console.log(id);
        let data = await User.findById(id, "type").lean().exec();
        if (!data) throw createError("User with that id doesn't exist", 404);
        let type = data.type;
        data = await User.findByIdAndRemove(id).exec();
        await Type.findByIdAndUpdate(type, {
            $pull: {
                userList: {
                    _id: id,
                },
            },
            $inc: {
                totalMember: -1,
            },
        });

        responseSuccess(res, 201, "User successfully Deleted!");
    } catch (err) {
        responseFailed(res, err.statusCode, err.message);
    }
}

module.exports = {
    getUser,
    insertUser,
    deleteUser,
};

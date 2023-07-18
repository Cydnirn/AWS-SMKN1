const { Type } = require("$model/TypeSchema");
const User = require("$model/UserSchema");
const { responseSuccess, responseFailed } = require("$modules/responseFormat");
const { createError } = require("$modules/returnFormat");

async function getTypeAll(req, res) {
    try {
        let data = await Type.find({}, "_id totalMember").lean().exec();
        if (!data) throw createError("Type data doesn't exist", 404);
        responseSuccess(res, 200, { data: data });
    } catch (err) {
        responseFailed(res, err.statusCode, err.message);
    }
}

async function getType(req, res) {
    try {
        const { type } = req.params;
        let data = await Type.findById(type)
            .populate("userList._id", "", User)
            .exec();
        if (!data) throw createError("Type data doesn't exist", 404);
        responseSuccess(res, 200, { data: data });
    } catch (err) {
        responseFailed(res, err.statusCode, err.message);
    }
}

async function initType(req, res) {
    try {
        const TypeList = ["IPA", "IPS"];
        for (let i = 0; i < TypeList.length; i++) {
            let newType = new Type({
                _id: TypeList[i],
            });
            let newTypeInsert = await newType.save();
            if (!newTypeInsert) {
                throw createError(
                    "Internal Server Error - Type already exist",
                    500
                );
            }
        }
        responseSuccess(res, 201, "Type created successfully");
    } catch (err) {
        responseFailed(res, err.statusCode, err.message);
    }
}

module.exports = {
    getType,
    getTypeAll,
    initType,
};

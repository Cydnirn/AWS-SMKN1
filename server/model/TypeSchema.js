const { mongoose } = require("$dependency");

const Schema = mongoose.Schema;

const typeUserListSchema = Schema(
    {
        _id: {
            type: String,
            ref: "User",
        },
        userName: {
            type: String,
        },
    },
    { autoIndex: false, autoCreate: false }
);

const typeSchema = Schema(
    {
        _id: {
            type: String,
        },
        totalMember: {
            type: Number,
            default: 0,
        },
        userList: [typeUserListSchema],
    },
    {
        collection: "Types",
    }
);

const Type = mongoose.model("Type", typeSchema);
const UserList = mongoose.model("User_List", typeUserListSchema);

module.exports = {
    Type,
    UserList,
};

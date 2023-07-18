const { mongoose } = require("$dependency");

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        _id: {
            type: String,
            required: true,
            default: "00000E",
        },
        userName: {
            type: String,
            required: true,
            index: {
                unique: true,
            },
        },
        type: {
            type: String,
            required: true,
            ref: "Type"
        },
    },
    {
        collection: "Users",
    }
);

module.exports = mongoose.model("User", userSchema);

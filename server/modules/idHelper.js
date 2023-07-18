const { crypto } = require("$dependency");

async function checkEmptyId(Schema, id) {
    let res = await Schema.findById(id).exec();
    return res;
}

async function idHash() {
    try {
        return crypto.randomBytes(4).toString("hex");
    } catch (err) {
        console.log(err);
        return res
            .status(500)
            .json({ error: "Internal Server Error - Failed Generatid ID" });
    }
}

async function generateIdHash(Schema) {
    try {
        let hash = await idHash();
        let hashNew,
            isEmpty = false;
        while (!isEmpty) {
            try {
                let status = await checkEmptyId(Schema, hash);
                if (!status || status == null) {
                    hashNew = hash;
                    isEmpty = true;
                }
                hash = await idHash();
            } catch (err) {
                console.log(err.message);
            }
        }
        return Promise.resolve(hashNew);
    } catch (err) {
        return err.message;
    }
}

module.exports = { generateIdHash };

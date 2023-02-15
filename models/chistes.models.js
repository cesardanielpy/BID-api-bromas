const mongoose = require("mongoose");

const ChistesSchema = new mongoose.Schema({
	setup: {
        type:String,
        require:[true, "Se necesitan datos"]
    },
    punchline: String
});

const Chistes = mongoose.model("Chistes", ChistesSchema);

module.exports = Chistes;
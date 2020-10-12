/** packages */
const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator");

/**Schema creation */
const programSchema = new mongoose.Schema({
    code:{
        type:"String",
        required: true,
        unique: true
    },
    name:{
        type: "String",
        require: true
    },
    nomdirector:{
        type: "String",
        require: true,
    },
    idprogram:{
        type: "Number",
        required: true,
        unique: true
    }
});

/**Schema exportation */
programSchema.plugin(validator);
module.exports = programSchema;
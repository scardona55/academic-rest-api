/** packages */
const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator");

/**Schema creation */
const facultSchema = new mongoose.Schema({
    code:{
        type: "String",
        required: true,
        unique:true
    },
    name:{
        type:"String",
        required: true,
    },
    namedean:{
        type: "String",
        require: true
    },
    id:{
        type: "Number",
        unique: true,
        required: true
    }
});

/**Schema exportation */
facultSchema.plugin(validator);
module.exports = facultSchema;
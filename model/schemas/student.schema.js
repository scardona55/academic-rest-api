/** packages */
const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator");

/**Schema creation */
const studentSchema = new mongoose.Schema({
    code:{
        type: "String",
        required: true,
        unique:true
    },
    name:{
        type:"String",
        required: true,
    },
    lastname:{
        type: "String",
        require: true
    },
    email:{
        type: "String",
        require: true,
        unique: true
    },
    phone:{
        type: "String",
        require: true
    },
    career:{
        type: "String",
        require: true
    },
});

/**Schema exportation */
studentSchema.plugin(validator);
module.exports = studentSchema;
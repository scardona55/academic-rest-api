/** packages */
const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator");

/**Schema creation */
const teacherSchema = new mongoose.Schema({
    document:{
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
    office:{
        type: "String",
        require: true
    },
    departament:{
        type: "String",
        require: true
    },
});

/**Schema exportation */
teacherSchema.plugin(validator);
module.exports = teacherSchema;
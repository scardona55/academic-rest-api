/** packages */
const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator");

/**Schema creation */
const userSchema = new mongoose.Schema({
    name:{
        type:"String",
        required: true,
    },
    lastname:{
        type: "String",
        require: true
    },
    username:{
        type: "String",
        require: true,
        unique: true
    },
    passsword:{
        type: "String",
        require: true
    },
    role:{
        type: "Number",
        require: true
    },
});

/**Schema exportation */
studentSchema.plugin(validator);
module.exports = userSchema;
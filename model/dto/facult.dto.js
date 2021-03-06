/**packages */
const mongoose = require("mongoose");

/** using schema */
const schema = require("../schemas/facult.shcema");

schema.static = {
    create: function(data, cb){
        let doc = new this(data);
        doc.save(cb);
    },
    getAll: function(query, cb){
        this.find(query, cb);
    },
    getByCode: function (query, cb){
        this.find(query, cb)
    },
    login: function (query, cb){
        this.find(query, cb)
    },
    update: function (query, data, cb){
        this.findOneAndUpdate(query, {$set: data}, {new: true}, cb);
    },
    delate: function (query, cb){
        this.findOneAndDelete(query);
    }
};

const dto = mongoose.model("coll_facult", schema);
module.exports = dto;
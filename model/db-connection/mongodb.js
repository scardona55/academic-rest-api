/**packages */
const mongoose = require("mongoose");
const config = require("config");

const mongodbInfo = config.get("db-connections.mongodb");


//user: acad_rest_api_user
//pass: eSOHzuvIZbl6VcL3

 const connStr = `mongodb+srv://${mongodbInfo.user}:${mongodbInfo.password}@${mongodbInfo.host}/${mongodbInfo.dbname}?retryWrites=true&w=majority`


 module.exports = () => {
     mongoose.connect(connStr);

     mongoose.connection.on("connected", () => {
         console.log("mongodb sever connected!");
     });

     mongoose.connection.on("disconnected", () => {
        console.log("mongodb sever disconnected!");
    });

    mongoose.connection.on("error", () => {
        console.log("mongodb sever connection error !");
    });

    mongoose.connection.on("SIGINT", () => {
        mongoose.connection.close(() => {
            console.log("mongodb sever shutting down!");
        })
    });
 }
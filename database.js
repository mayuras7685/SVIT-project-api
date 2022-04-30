const mongoose = require("mongoose")
const URI =
  "mongodb+srv://hacksvit:hir1441@cluster0.bjd4h.mongodb.net/HACKSVIT?retryWrites=true&w=majority"

//Get the default connection
/*
var conn = mongoose.connection
conn.on("connected", function () {
  console.log("database is connected successfully")
})
conn.on("disconnected", function () {
  console.log("database is disconnected successfully")
})
conn.on("error", console.error.bind(console, "connection error:"))

*/
const connectToMongo = () => {
  mongoose.connect(URI, () => {
    console.log("Connection Successfull")
  })
}

module.exports = connectToMongo

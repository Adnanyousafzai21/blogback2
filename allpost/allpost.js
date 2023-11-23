const mongoose = require("mongoose")
const blogshema= new mongoose.Schema({
    title:String,
    discription: String,
    fristname: String
})

const  allblogs = mongoose.model("allblogs", blogshema)
module.exports = allblogs
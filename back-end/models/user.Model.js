const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    userName:{
        type:String,
        required:[true ,"please add the user Name"]
    },
    email:{
        type:String,
        required:[true ,"please add the user email addresss"],
        unique:[true ,"Email Address Alredy take in "]
    },
    password:{
        type:String,
        required:[true,"please add the user password"]
    },
    profile_image:{
        type:String,
    }
},{
    timestamps : true
})

module.exports = mongoose.model("User",userSchema);
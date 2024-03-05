const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const User = Schema({
    _id:Schema.Types.ObjectId,
    email:String,
    givenName:String,
    sirName:String,
    phoneNumber:String,
    accountType:String,
    password:String,
    
});

module.exports = Mongoose.model('User',User);
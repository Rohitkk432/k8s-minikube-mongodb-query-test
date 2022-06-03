const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    name:{required:true, type:String},
    email:{required:true, type:String}
});

module.exports = mongoose.model('user', userSchema, 'user');
const mongoose = require("mongoose");

const LoginSchema = new mongoose.Schema({
    email:{
        type: String,
        unique: true,
        required: true
    },
    password:{
        type: String,
        required: true
    }
});
    module.exports = mongoose.model("Login", LoginSchema);
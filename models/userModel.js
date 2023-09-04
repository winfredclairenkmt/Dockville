const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = mongoose.Schema({
    fname: {
        type: String,
        required: [true, "add username"],
    },
    lname:{
        type: String,
        required:[true, "add lastname"]
    },
    telephone: {
        type: String
    },
    address: {
        type: String,
    },
    nin: {
        type: String,
        required: [true, "please add nin"],
    },
    gender: {
        type: String,
        enum: ["male", "female"],
        required: [true, "please add gender"],
    },
    role: {
        type: String,
        enum: ["manager", "tyreUnitManager", "batteryUnitManager", "parkingUnitManager"],
        required: [true, "please add role"],
    },
    email: {
        type: String,
        required: [true, "please add email"],
        unique: [true, "email already taken"],
    },
    password: {
        type: String,
        required: [true, "please add password"],
    }
},
    {
        timestamps: true,
    }
);

userSchema.plugin(passportLocalMongoose, {
    usernameField: "email"
});
module.exports = mongoose.model("User", userSchema);
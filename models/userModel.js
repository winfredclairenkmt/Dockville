const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = mongoose.Schema({
    nameOfEmployee: {
        type: String,
        required: [true, "add username"],
    },
    phone: {
        type: String,
        required: [true, "add user email"],
        unique: [true, "email already taken"],
    },
    address: {
        type: String,
        required: [true, "please add password"],
    },
    gender: {
        type: String,
        enum: ["male", "female"],
        required: [true, "please add gender"],
    },
    nin: {
        type: String,
        required: [true, "please add nin"],
    },
    email: {
        type: String,
        required: [true, "please add email"],
        unique: [true, "email already taken"],
    },
    role: {
        type: String,
        enum: ["manager", "tyreUnitManager", "batteryUnitManager", "parkingUnitManager"],
        required: [true, "please add role"],
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
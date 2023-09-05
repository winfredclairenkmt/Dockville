const mongoose = require("mongoose");
const BatterySchema = new mongoose.Schema({
    fname: {
        type: String,
        required: [true, "please add name"],
      },
      lname:{
        type: String,
        required:[true, "please add lastname"]
      },
      telephone: {
        type: String,
        unique: true,
        required: [true, "please add number"],
      },
      gender: {
        type: String,
        enum: ["male", "female"],
        required: [true, "please add gender"],
      },
      battype: {
        type: String,
      },
      batterysize: {
        type: String,
      },
      date: {
        type: String,
        required: [true, "please add date"],
      },
      timehired: {
        type: String,
        required: [false, "please add timein"],
      },
      timereturned: {
        type: String,
      },
      charge: {
        type: Number,
        required: [true, "please add charge"],
      },
      receipt: {
        type: String,
        unique: true,
        required: [true, "please add receipt"],
      },
    },
    {
      timestamps: true,
    });

module.exports = mongoose.model("Battery", BatterySchema);

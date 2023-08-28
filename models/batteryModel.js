const mongoose = require("mongoose");

const BatterySchema = new mongoose.Schema({
    nameOfDriver: {
        type: String,
        required: [true, "please add name"],
      },
      tel: {
        type: String,
        unique: true,
        required: [true, "please add number"],
      },
      nin: {
        type: String,
        unique: true,
      },
      gender: {
        type: String,
        enum: ["male", "female"],
        required: [true, "please add gender"],
      },
      timein: {
        type: String,
        required: [false, "please add timein"],
      },
      timeout: {
        type: String,
      },
      date: {
        type: String,
        required: [true, "please add date"],
      },
      battsize: {
        type: String,
        required: [true, "please add battsize"],
          
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

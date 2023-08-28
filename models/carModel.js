const mongoose = require("mongoose");

const carSchema = mongoose.Schema(
  {
    drivername: {
      type: String,
    },
    gender: {
      type: String, 
      enum: ["male", "female"],
          
    },
    telephone: {
      type: String,
    
    },
    numberplate: {
      type: String,
           
    },
    cartype: {
      type: String,
       
    },
    nin: {
      type: String,
      
    },
    carmodel: {
      type: String,
    },
    colour: {
      type: String,
    },
    date: {
      type: Date,
    },
    timein: {
      type: String,
       
    },
    parkingtype: {
      type: String,
    },
    timeout: {
      type: String,
       
    },
    charge: {
      type: String,
    },
    receipt:{
      type: String,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Car", carSchema);

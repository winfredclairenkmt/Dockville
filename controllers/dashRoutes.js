// const { ensureLoggedIn } = require('connect-ensure-login');
const express = require('express');
const router = express.Router();
const User= require('../models/userModel');
const Car = require('../models/carModel');
const Battery = require('../models/batteryModel');
// const Tyre= require('../models/tyreModel');

router.get('/admindash',  async(req, res) => {
    try{
    const carCount = await Car.countDocuments();
    const batteryCount = await Battery.countDocuments();
    // const tyreCount = await Tyre.countDocuments();
    const employee = await User.find();
    console.log(employee);
    res.render('admindash.pug' , {employees: employee, carCount, batteryCount});
    }catch(error){
        console.log('error', error)
        res.status(400).render('admindash.pug');
    }
});

router.get('/batterydash', async(req, res) => {
    try{
        const batteryCount = await Battery.countDocuments();
        let battery = await Battery.find();
    res.render('batterydash.pug', {batteries: battery, batteryCount});
    }catch(error){
        res.status(400).render('batterydash.pug');
    }
    res.render('batterydash.pug');
})

// router.get('/tyredash', async(req, res) => {
//     try{
//         const tyreCount = await Tyre.countDocuments();
//         let client = await Tyre.find();
//     res.render('tyredash.pug', {tyres: client, tyreCount});
//     }catch(error){
//         res.status(400).render('tyredash.pug');
//     }
//     res.render('tyredash.pug');
// })

router.get('/cardash', async(req, res) => {
    try{
        const carCount = await Car.countDocuments();
        let client = await Car.find();
    res.render('cardash.pug', {cars: client, carCount});
    }
    catch(error){
        res.status(400).render('cardash.pug');
    }
    res.render('cardash.pug');
   
})



module.exports = router;
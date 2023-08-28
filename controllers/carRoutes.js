const express = require('express');
const router = express.Router();
const Car = require('../models/carModel');

router.get('/car', (req, res) => {
    res.render('car.pug');
});

router.post('/regCar', async(req, res) => {
    try{
        console.log(req.body);
        const car = new Car (req.body);
        await car.save();
        res.redirect('/api/cardash') 
       
    }catch(error){
        res.status(400).render('car');
        console.log(error)
        
    }

});



module.exports = router;
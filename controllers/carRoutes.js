const express = require('express');
const router = express.Router();
const Car = require('../models/carModel');

//get empty car form for filling
router.get('/car', (req, res) => {
    res.render('car.pug');
});

//post new carin the database
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

//editing car input
router.get('/editCar/:id', async(req, res) => {
    const car = await Car.findById(req.params.id);
    res.render('caredit', {car});
});

router.post('/editCar/:id', async (req, res) => {
    const updatedData = req.body;
    try {
        const updatedCar = await Car.findByIdAndUpdate(req.params.id, updatedData, { new: true });
        res.redirect(`/editCar/${updatedCar._id}`);
    } catch (error) {
        res.status(500).send("Error updating car.");
    }
});

module.exports = router;
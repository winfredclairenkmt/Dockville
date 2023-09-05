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
router.get('/editCar/edit/:id', async(req, res) => {
    try{
    const vehicle = await Car.findOne({_id: req.params.id});
    res.render('caredit', {car: vehicle});
    }catch(error){
        res.status(400).send('Car isnt in the database');
    }
});

router.post('/editCar/edit', async (req, res) => {
    try {
        await Car.findOneAndUpdate({_id: req.query.id }, req.body);
        res.redirect('/api/cardash');
    } catch (error) {
        res.status(500).send("Error updating car.");
    }
});

router.get("/editCar/receipt/:id", async(req, res) => {
    try {
      const vehicle = await Car.findOne({_id: req.params.id });
      res.render("receipt",{car: vehicle});
    }catch(error) {
      res.status(404).send("Sorry cant generate receipt");
      console.log(error);
    }
  });


module.exports = router;
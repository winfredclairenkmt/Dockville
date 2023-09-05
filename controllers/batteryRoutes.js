const express = require('express');
const router = express.Router();
const Battery = require('../models/batteryModel');

router.get('/battery', async(req, res) => {
    res.render('battery.pug');
});

router.post('/regBatt', async(req, res) => {
    try{
        const battery = new Battery(req.body);
        await battery.save();
        res.redirect('/api/batterydash');
    }catch(error){
        res.status(400).render('battery');
        console.log(error);
    }
})

router.get('/editbattery/edit/:id', async(req, res) => {
    try{
    const vehicle = await Battery.findOne({_id: req.params.id});
    res.render('batteryedit', {battery: vehicle});
    }catch(error){
        res.status(400).send('battery isnt in the database');
    }
});

router.post('/editbattery/edit', async (req, res) => {
    try {
        await battery.findOneAndUpdate({_id: req.query.id }, req.body);
        res.redirect('/api/batterydash');
    } catch (error) {
        res.status(500).send("Error updating battery.");
    }
});




module.exports = router;
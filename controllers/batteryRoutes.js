const express = require('express');
const router = express.Router();
const Battery = require('../models/batteryModel');

router.get('/battery', async(req, res) => {
    res.render('battery.pug');
});
router.post('/regBattery', async(req, res) => {
    try{
        console.log(req.body);
        const battery = new Battery (req.body);
        await battery.save();
        res.redirect('/api/batterydash') // redirect to home page
       
    }catch(error){
        res.status(400).render('battery');
        console.log(error)
        //we redirect a path we render a file
    }
});
router.get('/editBattery/:id', async(req, res) => {
    try{
        const battery = await Battery.findById(req.params.id);
        res.render('editbattery.pug', {battery});
        console.log(battery);
    }catch(error){
        res.status(400).render('editbattery.pug');
        console.log(error)
    }
    
});

router.post('/editBattery', async (req, res) => {
    try {
      // Get the battery ID from the hidden input field
      const batteryId = req.body.batteryId;
  
      // Find the battery by its ID and update its properties
      await Battery.findByIdAndUpdate(batteryId, {
        // Update the properties based on the form fields
        timeout: req.body.timeout,
        
      });
  
      // Redirect to the batterydash.pug page after updating
      res.redirect('/api/batterydash');
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });




module.exports = router;
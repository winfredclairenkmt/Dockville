const express = require('express');
const router = express.Router();
const Employee = require('../models/userModel');
// const passport = require('passport');


router.get('/register', (req, res) => {
    res.render('register.pug');
});

router.post('/register', async(req, res) => {
    try{
        const user = new Employee(req.body);
        console.log(user);
        await Employee.register(user, req.body.password);
        res.redirect('/api/register');
    }
    catch(error){
        res.status(400).render("register.pug");
        console.log(error);
    }
    
});


module.exports = router;
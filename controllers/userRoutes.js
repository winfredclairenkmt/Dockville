const express = require('express');
const router = express.Router();
const Employee = require('../models/userModel');
// const passport = require('passport');
const { ensureLoggedIn } = require('connect-ensure-login');


router.get('/register',(req, res) => {
    // if (req.session.user.role === "manager") {
    //     res.render('register.pug');
    // }else{
    //     res.redirect('/api/login');
    // }
    res.render('register.pug');
});

router.post('/regEmp', async(req, res) => {
    try{
        const user = new Employee(req.body);
        console.log(user);
        await Employee.register(user, req.body.password);
        res.redirect('/api/admindash');
    }
    catch(error){
        res.status(400).render("register.pug");
        console.log(error);
    }
    
});


module.exports = router;
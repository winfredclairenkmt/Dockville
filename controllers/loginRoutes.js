const express = require('express');
const router = express.Router();
const Login = require('../models/loginModel');
const passport = require('passport');

router.get("/login", (req, res) => {
    res.render("login.pug");
});


router.post("/login", passport.authenticate("local",
{failureRedirect: "/api/login"}), 
(req, res)=> {
    req.session.user = req.user
  let  loggedInUser = req.session.user.username;
console.log(loggedInUser );


if(req.session.user.role === "manager"){
    res.render("admindash.pug");
}
if(req.session.user.role === "tyreUnitManager"){
    res.render("tyredash.pug");
}
if(req.session.user.role === "batteryUnitManager"){
    res.render("batterydash.pug");
}
if(req.session.user.role === "parkingUnitManager"){
    res.render("cardash.pug");
}

 res.redirect("#", {loggedInUser});
});









module.exports = router;
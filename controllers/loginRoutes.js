const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get("/login", (req, res) => {
  res.render("login.pug");
});

router.post("/login",passport.authenticate("local", { failureRedirect: "/api/login" }),(req, res) => { 
    // console.log("user logged in");
    req.session.user = req.user;
    let loggedInUser = req.session.user.username;
    console.log(loggedInUser);

    if (req.session.user.role === "manager") {
      res.redirect("/api/admindash");
    } else if (req.session.user.role === "tyreUnitManager") {
      res.redirect("/api/tyredash");
    } else if (req.session.user.role === "batteryUnitManager") {
      res.redirect("/api/batterydash");
    } else if (req.session.user.role === "parkingUnitManager") {
      res.redirect("/api/cardash");
    } else {
      res.redirect("/api/login");
    }
  }
);

module.exports = router;

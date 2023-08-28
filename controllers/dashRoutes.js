// const { ensureLoggedIn } = require('connect-ensure-login');
const express = require('express');
const router = express.Router();

router.get('/admindash',  (req, res) => {
    res.render('admindash.pug');
})
router.get('/batterydash', (req, res) => {
    res.render('batterydash.pug');
})
router.get('/tyredash', (req, res) => {
    res.render('tyredash.pug');
})
router.get('/cardash', (req, res) => {
    res.render('cardash.pug');
})



module.exports = router;
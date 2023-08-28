const express = require('express');
const router = express.Router();


router.get('/landing', (req, res) => {
    res.render('index.pug');
})


module.exports = router;
const express = require('express');
const router = express.Router();

router.get('/car', (req, res) => {
    res.render('car.pug');
})

module.exports = router;
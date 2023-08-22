const express = require('express');
const router = express.Router();

router.get('/battery', (req, res) => {
    res.render('battery.pug');
})

module.exports = router;
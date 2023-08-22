const express = require('express');
const router = express.Router();

router.get('/tyre', (req, res) => {
    res.render('tyre.pug');
})

module.exports = router;
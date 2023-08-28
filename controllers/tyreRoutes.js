const express = require('express');
const router = express.Router();

router.get('/tyre', (req, res) => {
    res.render('tyre.pug');
})
router.post('/regtyre', (req, res) => {
    res.redirect("/api/tyredash");
})

module.exports = router;
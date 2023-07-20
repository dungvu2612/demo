var express = require('express');
var router = express.Router();

router.get('/hn', ( req, res) => {
    var address = "so 2 pham van bach - cau giay"
res.render('hanoi', {hn: "ha noi", diachi :address});
})
router.get('/hcm', (req, res) => {
    res.render('hcm');
})
module.exports = router;
const express = require('express');

const router = express.Router();

/* =======  GET admin PAGE  ======= */
router.get('/admin', function (req, res, next) {
    res.render("admin/dashboard")
})

module.exports = router
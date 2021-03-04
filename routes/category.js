const express = require('express');

const router = express.Router();

/* =======  GET admin PAGE  ======= */
router.get('/admin/add-category', function (req, res, next) {
    res.render("admin/add-category")
})
router.get('/admin/list-category', function (req, res, next) {
    res.render("admin/list-category")
})

module.exports = router
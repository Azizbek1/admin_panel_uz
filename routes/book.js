const express = require('express');

const router = express.Router();

/* =======  GET admin PAGE  ======= */
router.get('/admin/add-book', function (req, res, next) {
    res.render("admin/add-book")
})
router.get('/admin/list-book', function (req, res, next) {
    res.render("admin/list-book")
})
// router.get('/admin/list-category', function (req, res, next) {
//     res.render("admin/list-category")
// })

module.exports = router
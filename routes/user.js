const express = require('express');

const router = express.Router();

/* =======  GET admin PAGE  ======= */
router.get('/admin/add-user', function (req, res, next) {
    res.render("admin/add-user")
})
router.get('/admin/list-user', function (req, res, next) {
    res.render("admin/list-user")
})

module.exports = router
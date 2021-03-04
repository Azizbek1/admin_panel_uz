const express = require('express');

const router = express.Router();

/* =======  GET admin PAGE  ======= */
router.get('/admin/issuebook', function (req, res, next) {
    res.render("admin/issue-a-book")
})
router.get('/admin/issuehistory', function (req, res, next) {
    res.render("admin/issue-history")
})

module.exports = router
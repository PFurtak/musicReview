const express = require('express');
const router = express.Router();



router.get('/login', function (req, res, next) {

    console.log('Login Page');
    res.render('template', {
        locals: { title: 'Login' },
        partials: {
            partial: 'partial-login'
        }
    });
});

module.exports = router;

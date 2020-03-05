var express = require('express');
var router = express.Router();
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.get('/login', function (req, res, next) {


    res.render('template', {
        locals: { title: 'Login' },
        partials: {
            partial: 'partial-login'
        }
    });
});

router.get('/register', function (req, res, next) {


    res.render('template', {
        locals: { title: 'Register' },
        partials: {
            partial: 'partial-signup'
        }
    });
});


module.exports = router;

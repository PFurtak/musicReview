const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const UserModel = require('../models/userModels');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', function(req, res, next) {
  res.render('template', {
    locals: { title: 'Login' },
    partials: {
      partial: 'partial-login'
    }
  });
});

router.get('/register', function(req, res, next) {
  res.render('template', {
    locals: { title: 'Register' },
    partials: {
      partial: 'partial-signup'
    }
  });
});

router.post('/login', async function(req, res, next) {
  const { email, password } = req.body;

  const user = new UserModel(null, null, email, password);
  const loginResponse = await user.loginUser();
  console.log(loginResponse);

  if (!!loginResponse.isValid) {
    req.session.is_logged_in = isValid;
    req.session.user_id = loginResponse.user_id;
    req.session.username = loginResponse.username;
    res.redirect(200, '/');
  } else {
    res.sendStatus(403);
  }
});

router.post('/register', function(req, res, next) {
  const { username, password, email } = req.body;

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  const user = new UserModel(null, username, email, hash);
  user.addUser();
  res.status(200).redirect('/');
});

module.exports = router;

const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  res.render('template', {
    locals: { title: 'Music' },
    partials: {
      partial: 'partial-index'
    }
  });
});

module.exports = router;

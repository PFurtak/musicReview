const express = require('express');
const router = express.Router();
const musicModel = require('../models/musicModel');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const data = await musicModel.getAllAlbums();
  res.render('template', {
    locals: { title: 'Albums', data: data },
    partials: {
      partial: 'partial-index'
    }
  });
});

module.exports = router;

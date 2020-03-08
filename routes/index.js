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

/* POST review to db */
router.post('/', async function(req, res) {
  const { albumid, review_title, review_text } = req.body;
  const postData = await musicModel.addReview(
    albumid,
    review_title,
    review_text
  );
  console.log(postData);
  res.sendStatus(200);
});

module.exports = router;

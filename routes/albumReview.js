const express = require('express'),
  router = express.Router(),
  musicModel = require('../models/musicModel');

router.get('/:id?', async (req, res, next) => {
  const id = req.params.id;
  const data = await musicModel.getById(id);
  const rev = await musicModel.getRevById(id);

  res.render('template', {
    locals: {
      title: data[0].name,
      data: data,
      rev: rev
    },
    partials: {
      partial: 'partial-reviews'
    }
  });
});

module.exports = router;

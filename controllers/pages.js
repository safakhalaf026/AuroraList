const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
    // query for 3 most recent
    // query for the top items for the user
  res.render('index.ejs')
})

module.exports = router;
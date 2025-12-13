const express = require('express')

const Item = require('../models/item')
const router = express.Router()

router.get('/', async (req, res) => {
        const allItems = await Item.find().sort({_id:-1}).limit(3).populate('owner')
        const userItems = await Item.find({owner: req.session.user._id}).sort({_id:-1}).limit(3).populate('owner') 
  res.render('index.ejs', {allItems,userItems})
})

module.exports = router;
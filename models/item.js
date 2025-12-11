const mongoose = require('mongoose')

const itemSchema = mongoose.Schema({
  itemName: {
    type: String,
    required: true,
  },

  retailPrice: {
    type: Number,
    min: 0,
    required: true,
  },

  purchaseLink: {
    type: String,
    required: true,
  },
  isBought: {
    type: Boolean,
    default: false,
    required: true,
  },
  category: {
    type: String,
    enum: ['Clothes', 'Makeup', 'Skincare', 'Jewelry', 'Electronics','Home', 'Micellaneous'],
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },

  notes: {
    type: String,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
  },
  addedtoWishlist: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',  
  }],
},{timestamps:true})
const Item = mongoose.model('Item', itemSchema)

module.exports = Item

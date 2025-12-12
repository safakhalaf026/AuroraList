const express = require('express')

const router = express.Router()
const User = require('../models/user')
const Item = require('../models/item')

// Full index (Show More)
router.get('/', async(req,res)=>{
    try {
        const allItems = await Item.find().populate('owner')
        res.render('items/itemIndex.ejs', {allItems})
    } catch (error) {
        console.error('The following error was encountered:' + error)
    }
})

// User full index (Show All)
router.get('/mine', async(req,res)=>{
    try {
        const userItems = await Item.find({owner: req.session.user._id}).populate('owner')
        res.render('items/userIndex.ejs', {userItems})   
    } catch (error) {
        console.error('The following error was encountered:' + error)
    }
})

// Display form to create a new item
router.get('/new', async(req,res)=>{
    try {
        return res.render('items/newItem.ejs')
    } catch (error) {
        console.error('The following error was encountered:' + error)
    }
})

// Add new item to logged-in user's wishlist
router.post('/', async(req,res)=>{
    try {
        req.body.owner = req.session.user._id
        req.body.isBought = false
        await Item.create(req.body)
        res.redirect('/items/mine')
    } catch (error) {
        console.error('The following error was encountered:' + error)
    }
})

// Display details page of a single item
router.get('/:id', async(req,res)=>{
    try {
        const item = await Item.findById(req.params.id).populate('owner')
        res.render('items/showItem.ejs', {item})
    } catch (error) {
        console.error('The following error was encountered:' + error)
    }
})

// Display edit form for a specific item
router.get('/:id/edit', async(req,res)=>{
    try {
        const item = await Item.findById(req.params.id)
        res.render('items/editItem.ejs', {item})
    } catch (error) {
        console.error('The following error was encountered:' + error)
    }
})

// Update wishlist item you own
router.put('/:id', async(req,res)=>{
    try {
        const item = await Item.findById(req.params.id)
        const isOwner = item.owner.equals(req.session.user._id)
        if(isOwner){
            await item.updateOne(req.body)
            res.redirect('/items')
        }else{
            throw new Error(`Permission denied to ${req.session.user.username}`) // defaults to custom error and catch block
        }
    } catch (error) {
        console.error('The following error was encountered:' + error)
    }
})

// Delete a wishlist item you own
router.delete('/:id', async(req,res)=>{
    try {
        const item = await Item.findById(req.params.id)
        const isOwner = item.owner.equals(req.session.user._id)
        if(isOwner){
            await item.deleteOne(req.body)
            res.redirect('/items')
        }else{
            throw new Error(`Permission denied to ${req.session.user.username}`) // defaults to custom error and catch block
        }
    } catch (error) {
        console.error('The following error was encountered:' + error)
    }
})

// // Add another user’s item to your wishlist
// router.post('/:id/copy', async(req,res)=>{
//     try {
//         //logic here
//     } catch (error) {
//         console.error('The following error was encountered:' + error)
//     }
// })
module.exports = router
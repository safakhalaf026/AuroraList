const express = require('express')

const router = express.Router()
const Item = require('../models/item')

// Full index (Show More)
router.get('/', async(req,res)=>{
    try {
        //logic here
    } catch (error) {
        console.error('The following error was encountered:' + error)
    }
})

// User full index (Show All)
router.get('/mine', async(req,res)=>{
    try {
        //logic here
    } catch (error) {
        console.error('The following error was encountered:' + error)
    }
})

// Display form to create a new item
router.get('/new', async(req,res)=>{
    try {
        //logic here
    } catch (error) {
        console.error('The following error was encountered:' + error)
    }
})

// Add new item to logged-in user's wishlist
router.post('/', async(req,res)=>{
    try {
        //logic here
    } catch (error) {
        console.error('The following error was encountered:' + error)
    }
})

// Display details page of a single item
router.get('/:id', async(req,res)=>{
    try {
        //logic here
    } catch (error) {
        console.error('The following error was encountered:' + error)
    }
})

// Display edit form for a specific item
router.get('/:id/edit', async(req,res)=>{
    try {
        //logic here
    } catch (error) {
        console.error('The following error was encountered:' + error)
    }
})

// Update wishlist item you own
router.put('/:id', async(req,res)=>{
    try {
        //logic here
    } catch (error) {
        console.error('The following error was encountered:' + error)
    }
})

// Delete a wishlist item you own
router.delete('/:id', async(req,res)=>{
    try {
        //logic here
    } catch (error) {
        console.error('The following error was encountered:' + error)
    }
})

// Add another user’s item to your wishlist
router.post('/:id/copy', async(req,res)=>{
    try {
        //logic here
    } catch (error) {
        console.error('The following error was encountered:' + error)
    }
})
module.exports = router
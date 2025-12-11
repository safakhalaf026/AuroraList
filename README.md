# ✨ Aurora List
Aurora List is a social wishlist application built using RESTful conventions. that allows users to create, manage, and explore wishlists in a simple and interactive interface.

---

## 🧩 About the Project
Aurora List helps users keep track of items they want to buy, discover wishlist items created by others, and even add those items made by others to their own list. With authentication handled, users can privately manage their own wishlist while browsing a shared space of all user-created items.

---

## ✨ Features
- Create personal wishlist items  
- View all wishlist items from every user  
- View only your own wishlist items  
- Edit your wishlist items  
- Delete items from your wishlist  
- Add items from other users’ wishlists into your own  


## 📁 RESTful Routes Overview
| Action | Method | Route | Description |
|--------|--------|--------|-------------|
| New Item Form | GET | `/wishlist/new` | Display form to create a new item |
| Create Item | POST | `/wishlist` | Add new item to logged-in user's wishlist |
| All Wishlists | GET | `/wishlists` | View all items created by all users |
| User Wishlist | GET | `/wishlist/me` | View only your own wishlist items |
| Edit Form | GET | `/wishlist/:id/edit` | Display edit form for a specific item |
| Update Item | PUT/PATCH | `/wishlist/:id` | Update wishlist item you own |
| Delete Item | DELETE | `/wishlist/:id` | Delete a wishlist item you own |
| Copy Item | POST | `/wishlist/:id/copy` | Add another user’s item to your wishlist |

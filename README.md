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
| All Items | GET | `/items` |Full index (Show More) |
| User Wishlist | GET | `/items/mine` | User full index (Show All) |
| New Item Form | GET | `/items/new` | Display form to create a new item |
| Create Item | POST | `/items` | Add new item to logged-in user's wishlist |
| Show Single Item | GET | `/items/:id` | Display details page of a single item |
| Edit Form | GET | `/items/:id/edit` | Display edit form for a specific item |
| Update Item | PUT | `/items/:id` | Update wishlist item you own |
| Delete Item | DELETE | `/items/:id` | Delete a wishlist item you own |
| Change Item Status | PUT | `/items/:id/mark` | Change purchase status |

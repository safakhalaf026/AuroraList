# ✨ Aurora List
Aurora List is a social wishlist application built using RESTful conventions. that allows users to create, manage, and explore wishlists in a simple and interactive interface.

---
## 🛠️ Gtting Started
To Begin using the app: 
1- **Download repositery into your local device**
2- **Initialize the application using the npm init command**
3- **Install the necessary packages using the npm i command** 
4- **In the repositery folder, create the .gitignore file and .env file**
5- **Add your Mongo DB URI (MONGODB_URI) and secret session (SECRET_SESSION) environment variables to your .env file. Add the node_modules and .env file to the .gitignore file**

---

## 🧩 About the Project
Aurora List helps users keep track of items they want to buy and discover wishlist items created by others. With authentication handled, users can privately manage their own wishlist while browsing a shared space of all user-created items.

---

## ✨ Features
- Create personal wishlist items  
- View all wishlist items from every user  
- View only your own wishlist items  
- Edit your wishlist items  
- Delete items from your wishlist  
- Change purchase status for item  


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

## 🛠️ Technologies Used
- **Node.js**
- **Express**
- **EJS** 
- **MongoDB / Mongoose**
- **RESTful Conventions**
---

## 🚀 Future Improvements
- Allow to copy items from different user wishlists to my own
- Add categories and tags  
- Add search and filtering options  
- Add pagination for large collections  
- Allow uploading item images  
- Implement likes or public notes  
---

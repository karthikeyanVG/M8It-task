const express = require("express");
const users = express.Router();
const UserController = require('../controller/user.collection')


users.post("/register", UserController.register);
users.post("/login", UserController.Login);
users.get("/profile", UserController.get_user);
users.get("/getAll",UserController.get_all);
users.post("/image",UserController.postGalleryImage);
users.get("/getimage",UserController.getGalleryImage);



module.exports = users;
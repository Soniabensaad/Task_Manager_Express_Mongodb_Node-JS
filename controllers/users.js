const User = require('../models/user');
// CRUD controllers

//Get all users

exports.getUsers = (req, res, next) => {
    Users.findAll()
       .then(users => {
        res.status(200).json({ users: users})
       })
       .catch(err => console.log(err))
}

//

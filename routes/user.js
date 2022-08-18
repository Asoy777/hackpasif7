"use strict"

const express = require('express')
const UserController = require('../controllers/userController')
const user = express.Router()

user.get('/:userId', UserController.detail)
user.get('/:userId/edit', UserController.edit)
user.post('/:userId/edit', UserController.update)

module.exports = user
var express = require('express');
router = express.Router();
const toDoController = require("../controllers/todo_controller.js")
const {sequelize} = require("../models");
const {QueryTypes} = require("sequelize");

/* GET home page. */
router.get('/',toDoController.homeRoute);

router.get('/add', toDoController.renderAddForm);

router.post('/add', toDoController.addNewItem)

router.get('/complete/:id',toDoController.markItemAsComplete);

router.get('/complete/:id',toDoController.markItemAsIncomplete);

router.get('/delete/:id',toDoController.deleteItem);

router.get('/edit/:id',toDoController.renderEditFrom);

router.post('/edit/:id', toDoController.updateItem);
module.exports = router;
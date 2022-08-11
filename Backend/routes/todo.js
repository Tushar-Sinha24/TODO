const express = require('express');

const { getTodo,updateTodo,deleteTodo,createTodo } = require('../controllers/todo.js')

const router = express.Router();

router.route('/').get(getTodo).post(createTodo)

router.route('/:id').put(updateTodo).delete(deleteTodo)

module.exports = router; 
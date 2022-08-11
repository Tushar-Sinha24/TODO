const Todo = require('../models/Todo');
const asyncHandler = require('../middleware/async')


//get todo
exports.getTodo = asyncHandler(async (req, res, next) => {
    const todo = await Todo.find();
    res.status(200).json({ success: true , todo});
});

//Create todo
exports.createTodo = asyncHandler(async (req, res, next) => {
    const todo = await Todo.create(req.body);
    res.status(201).json({ success: true , todo});
});


//delete todo
exports.deleteTodo= asyncHandler(async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id);
    res.status(200).json({success:true,data:{}});
});

//UpdateTodo

exports.updateTodo= asyncHandler(async (req, res) => {
    const todo=await Todo.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
});

    res.status(200).json({ success: true, data: todo });
});
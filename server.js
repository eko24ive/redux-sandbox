const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const app = new express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/todos');

const TodoSchema = mongoose.Schema({
    text: String,
    completed: Boolean,
})

const Todo = mongoose.model('Todo', TodoSchema);

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/todos', (req, res) => {
    Todo.find().then(todos => {
        res.send(todos);
    });
});

app.post('/todo/add', (req, res) => {
    const { text, completed } = req.body;

    const newTodo = Todo({
        text,
        completed
    });

    newTodo.save().then(todo => {
        console.log({
            text,
            completed,
            id: todo._id,
        });
        
        return res.send({
            text,
            completed,
            id: todo._id,
        });
    });
});



app.listen('4000', () => {
    console.log('started at http://localhost:4000/');
});
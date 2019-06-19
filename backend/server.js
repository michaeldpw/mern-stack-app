const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const todoRoutes = express.Router();

const PORT = 4000;

let Todo = require('./model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/todos', { useNewUrlParser: true });
mongoose.connection.once('open', function(){
    console.log('MongoDB database connection established successfully!')
})

todoRoutes.route('/').get(function(req, res){
    Todo.find(function(err,todos){
        if(err){
            console.log(err);
        } else {
            res.json(todos);
        }
    });
});

todoRoutes.route('/:id').get(function(req, res){
    let id = req.params.id;
    Todo.findById(id, function(err, todo){
        res.json(todo);
    });
});

todoRoutes.route('/add').post(function(req, res){
    let todo = new Todo(req.body);
    todo.save()
        .then(todo => {
            res.status(200).json({"todo": "todo added successfully"});
        })
        .catch(err => {
            res.status(400).send('adding new todo failed')
        });
});

todoRoutes.route('/update/:id').post(function(req, res){
    Todo.findById(req.params.id, function(err, todo){
        if(!todo) {
            res.status(404).send('data is not found');
        } else {
            todo.content = req.body.content;
            todo.responsible = req.body.responsible;
            todo.priority = req.body.priority;
            todo.isCompleted = req.body.isCompleted;

            todo.save().then(todo => {
                res.json('Todo updated')
            }).catch(err => {
                res.status(400).send('Update failed')
            });

        }
    });
});

todoRoutes.route('/delete/:id').delete(function(req, res){
    Todo.findByIdAndDelete(req.params.id, function(err, todo){
        if(err) {
            console.log(err);
        } else {
            console.log("data all gone and deleted yo");
            res.status(204).send('delete failed');
        }
    })
});

app.use('/todos', todoRoutes);

app.listen(PORT, function(){
    console.log("Server is running on port: " + PORT);
})


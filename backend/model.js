const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Todo = new Schema({
    content: {
        type: String
    },
    responsible: {
        type: String
    },
    priority: {
        type: String
    },
    isCompleted: {
        type: Boolean
    }

})


module.exports = mongoose.model('Todo', Todo);
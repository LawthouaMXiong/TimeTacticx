const { Schema, model } = require('mongoose');

const taskSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    
});

const Task = model('Task', taskSchema);

module.exports = Task;
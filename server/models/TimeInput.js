const { Schema, model } = require('mongoose');

const timeInputSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    time: {
        type: Number,
        required: true
    },
    task: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Task',
        },
    ],
});

const TimeInput = model('TimeInput', timeInputSchema);

module.exports = TimeInput;
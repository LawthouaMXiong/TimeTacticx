const { Schema, model } = require('mongoose');

const utilizationSchema = new Schema({
    workDays: {
        type: Number,
        required: true
    },
    workHours: {
        type: Number,
        required: true
    },
    percentage: {
        type: Number,
        required: true
    }
});

const Utilization = model('Utilization', utilizationSchema);

module.exports = Utilization;
const mongoose = require('mongoose')

const homeworkSchema = new mongoose.Schema({
    courseCode: {
        type: String,
        required: true,
    },
    dueDate: {
        type: Date,
        required: true,
    },
    notes: {
        type: String,
        required: false,
    },
    completed: {
        type: Boolean,
        default: false,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
}, { timestamps: true })
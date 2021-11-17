const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedbackSchema = Schema({
    fullname: { 
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    message: {
        type: String,
        require: true
    }
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;
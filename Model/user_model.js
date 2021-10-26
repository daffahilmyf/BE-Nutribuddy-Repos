const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
    firstname: { 
        type: String,
        require: true
    },
    lastname: { 
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
    },
    phone_number: {
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true,
    },
    isVerified:{
        type: Boolean,
        require: true,
        default: false
    }
});

const Person = mongoose.model('User', userSchema);

module.exports = Person
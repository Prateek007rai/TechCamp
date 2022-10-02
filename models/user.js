const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Age:{
        type: String,
    
        
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    country: {
        type: String,
        
    }
}, {
    timestamps: true
});


const User = mongoose.model('User', userSchema);

module.exports = User;
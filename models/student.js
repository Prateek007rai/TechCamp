const mongoose = require('mongoose');


const studentSchema = new mongoose.Schema({
    age:{
        type: String, 
        require: true   
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    college: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    batch:{
        type: String,
        require: true  
    },
    dscore:{
        type: String,
        require: true  
    },
    wscore:{
        type: String,
        require: true  
    },
    rscore:{
        type: String,
        require: true  
    },
    interview:{
        type: String, 
        require: true
    },
    status:{
        type: String,
        require: true  
    },
    result:{
        type: String,
        require: true  
    }
    
},{
    timestamps: true
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
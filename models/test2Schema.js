const mongoose = require('mongoose');

const Test2Schema = new mongoose.Schema(
{
    Field1: { 
        type: String,
        required: false,
        unique: false
    },
});

module.exports = mongoose.model('Test2', Test2Schema);

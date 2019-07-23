const express  = require('express');
const app      = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://listaamiga:fnalt123@cluster0-dfard.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen('3000', function() {
    console.log('Server running');
});

app.use(require('./routes'));
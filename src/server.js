const express  = require('express');
var morgan     = require('morgan')
const app      = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://listaamiga:fnalt123@cluster0-dfard.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true, useCreateIndex: true });

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen('3000', function() {
    console.log('Server running');
});

app.use(require('./routes'));

app.use(function(err, req, res, next){
    res.status(500).json(err.errors);
});

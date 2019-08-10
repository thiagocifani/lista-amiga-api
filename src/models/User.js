const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema   =  mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
    id: ObjectId,
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true}
},
{
    timestamp: true
});

User.plugin(uniqueValidator, { message: 'deve ser único.' });
module.exports = mongoose.model('User', User);

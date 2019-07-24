const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Participation = new Schema({
    id: ObjectId,
    event: { type: ObjectId, ref: 'Event'},
    user: { type: ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Participation', Participation);
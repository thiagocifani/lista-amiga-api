const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Event = new Schema({
  id: ObjectId,
  title: { type: String, required: true},
  local: { type: String, required: true},
  date: Date
},
{ 
    timestamp: true 
});

module.exports = mongoose.model('Event', Event);
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Event = new Schema({
  id: ObjectId,
  title: { type: Schema.Types.String, required: true, unique: true },
  local: { type: String, required: true},
  date: Date,
  participations: [{ type: Schema.Types.ObjectId, ref: 'Participation' }],
  city: { type: ObjectId, ref: 'City'}
},
{ 
    timestamp: true 
});

Event.plugin(uniqueValidator, { message: 'deve ser único.' });
module.exports = mongoose.model('Event', Event);
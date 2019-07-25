const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Event = new Schema({
  id: ObjectId,
  title: { type: Schema.Types.String, required: true, unique: true },
  local: { type: String, required: true},
  date: Date,
  participations: [{ type: Schema.Types.ObjectId, ref: 'Participation' }]
},
{ 
    timestamp: true 
});

module.exports = mongoose.model('Event', Event);
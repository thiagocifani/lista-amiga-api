const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;


const City = new Schema({
    id: ObjectId,
    name: { type: String, unique: true, required: true },
    state: { type: ObjectId, ref: 'State'}
},
{ 
    timestamps: true 
}
);

City.plugin(uniqueValidator, { message: 'deve ser único.' });
module.exports = mongoose.model('City', City);
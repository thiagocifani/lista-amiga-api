const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;


const State = new Schema({
    id: ObjectId,
    name: { type: String, unique: true, required: true },
    cities: [{ type: Schema.Types.ObjectId, ref: 'City' }]
},
{ 
    timestamps: true 
}
);

State.plugin(uniqueValidator, { message: 'deve ser único.' });
module.exports = mongoose.model('State', State);
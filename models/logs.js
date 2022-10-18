const mongoose = require('mongoose');

//Schema
const logSchema = new mongoose.Schema({
    title:  { type: String, required: true },
    entry:  { type: String, required: true },
    shipIsBroken : Boolean 
});


//Model for the Schema
const Log = mongoose.model('Log', logSchema);


//Export
module.exports = Log;
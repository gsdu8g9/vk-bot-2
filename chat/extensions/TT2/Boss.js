var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    spawned: Date,
    dead: Date,
    // damage: [],
}, { timestamps: true });

var Boss = mongoose.model('TT2_Boss', schema);

module.exports = Boss;

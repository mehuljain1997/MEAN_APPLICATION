const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    PId: Number,
    Ptitle: String,
    PName: String,
    
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);
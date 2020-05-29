module.exports = (app) => {
    const notes = require('../controllers/note.controller.js');

    // Create a new Note
    app.post('/notes', notes.create);

    // Retrieve all Notes
    app.get('/notes', notes.findAll);

    // Retrieve a single Note with noteId
    app.get('/notes/:PId', notes.findOne);

    // Update a Note with noteId
    app.put('/notes/:PId', notes.update);

    // Delete a Note with noteId
    app.delete('/notes/:PId', notes.delete);
}
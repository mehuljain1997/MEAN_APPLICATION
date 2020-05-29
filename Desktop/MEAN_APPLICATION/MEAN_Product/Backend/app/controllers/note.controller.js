const Note = require('../models/note.model.js');

// Create and Save a new Note
exports.create = (req, res) => {
    console.log('inside create')
    // Validate request
    if(!req.body.PId) {
        return res.status(400).send({
            message: "Note PId can not be empty"
        });
    }
  console.log('req',req.body)
   // Create a Note
    // const note = new Note({
      
    //     title: req.body.title || "Untitled Note", 
    //     content: req.body.content
    // });

     const note = new Note({
        PId: req.body.PId,
         Ptitle: req.body.Ptitle || "Untitled Note", 
         PName: req.body.PName
     });



 
 

console.log('note',note);

    // Save Note in the database
    note.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });
    res.send('saved data');
};






// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
   
    console.log('inside findall')
    Note.find()
    .then(notes => {
      
        var ProductIdArray = [];
        for(let i=0; i<notes.length;i++)
        {

            ProductIdArray.push(notes[i].PId);

        }
        console.log('all title',ProductIdArray);
        res.send(notes);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });


 

};

// Find a single note with a noteId
exports.findOne = (req, res) => {
    console.log('inside findone')
    Note.find({"PId": Number(req.params.PId)})
    .then(note => {
        console.log('inside then',note);
        if(!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.PId
            });            
        }
        res.send(note);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.PId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.PId
        });
    });

    

};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {

    console.log('inside update')



      // Validate Request
      if(!req.body.PId) {
        return res.status(400).send({
            message: "Note PId can not be empty"
        });
    }

    // Find note and update it with the request body
    Note.update({"PId": Number(req.params.PId)},  {$set:{
        PId: req.body.PId || "Untitled Note",
        Ptitle: req.body.Ptitle,
        PName: req.body.PName
    }}, {new: true})
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.PId
            });
        }
        res.send(note);
    }).catch(err => {
        console.log('catch');
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.PId
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.PId
        });
    });

    res.send({
        message: "Product Update Successfully"
    });

};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    console.log('inside delete')
 

    Note.deleteMany({"PId": Number(req.params.PId)})
    .then(note => {
        console.log('note',note);
        if(!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.PId
            });
        }
        res.send({message: "Note deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.PId
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.PId
        });
    });

    res.send({message: "Product deleted successfully!"})

};
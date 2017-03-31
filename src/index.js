var note = new singleNote("Favourite drink: seltzer")

var notelist = new noteList();


var noteCon = new NoteController(notelist);


notelist.newNote(note);

var view = noteCon.createNoteListView();

noteCon.getHTML(view);

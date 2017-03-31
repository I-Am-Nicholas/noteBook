function listSingleNote() {
    //Notebook containing one note.
    var noteRB = new singleNote("My other favourite language is Ruby");
    var notelist = new noteList();

    notelist.newNote(noteRB);
    // there was a variable that wasn't doing anything here so condensed
    // this code
    var viewNotes = new NoteListView(notelist);

    assert.isTrue(viewNotes.showHTML() == "<ul><li><div>My other favourite language is Ruby</div></li></ul>");
    if (assert){console.log("listSingleNotes: PASSED!!!")}
};

  listSingleNote();


  function listNotes() {
      //Notebook containing multiple notes.
      var noteRB = new singleNote("My other favourite language is Ruby");
      var noteJS = new singleNote("My other favourite language is JavaScript");
      var notelist = new noteList();

      notelist.newNote(noteRB);
      notelist.newNote(noteJS);

      // nlm = notelist.showNote(); // this is the one I removed in the
      // test above
      var viewNotes = new NoteListView(notelist);
      assert.isTrue(viewNotes.showHTML() == '<ul><li><div>My other favourite language is Ruby</div></li><li><div>My other favourite language is JavaScript</div></li></ul>');
      if (assert){console.log("listNotes: PASSED!!!")}
  };

    listNotes();


    function listNoNotes() {
      //Notebook contains no notes.
        var notelist = new noteList();

        // nlm = notelist.showNote(); // the createNoteListView function
        //iterates through the notelist so you don't need to show the note
        var viewNotes = new NoteListView(notelist);

        assert.isTrue(viewNotes.showHTML() == '<ul><li><div></div></li></ul>');
        if (assert){console.log("listNoNotes: PASSED!!!")}

    };

      listNoNotes();

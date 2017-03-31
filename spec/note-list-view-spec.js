function listSingleNote() {
    //Notebook containing one note.
    var noteRB = new singleNote("My other favourite language is Ruby");
    var notelist = new noteList();

    notelist.newNote(noteRB);

    var nlm = notelist.showNote();
    var viewNotes = new NoteListView(nlm);
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

      nlm = notelist.showNote();
      var viewNotes = new NoteListView(nlm);
      assert.isTrue(viewNotes.showHTML() == '<ul><li><div>My other favourite language is Ruby</div></li><li><div>My other favourite language is JavaScript</div></li></ul>');
      if (assert){console.log("listNotes: PASSED!!!")}

  };

    listNotes();


    function listNoNotes() {
      //Notebook contains no notes.
        var notelist = new noteList();

        nlm = notelist.showNote();
        var viewNotes = new NoteListView(nlm);

        assert.isTrue(viewNotes.showHTML() == '<ul><li><div></div></li></ul>');
        if (assert){console.log("listNoNotes: PASSED!!!")}

    };

      listNoNotes();

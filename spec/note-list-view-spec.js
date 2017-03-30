function listSingleNote() {
    //Notebook containing one note.
    var noteRB = new singleNote("My other favourite language is Ruby");
    var notelist = new noteList();

    notelist.newNote(noteRB);

    nlm = notelist.showNote();
    var viewNotes = new noteListView(nlm);

    assert.isTrue(viewNotes.showHTML() == '<ul><li><div>My other favourite language is Ruby</div></li></ul>');
    if (assert){console.log("listNotes: PASSED!!!")}

};

  listSingleNote();


  function listNotes() {
      //Notebook containing multipls notes.
      var noteRB = new singleNote("My other favourite language is Ruby");
      var noteJS = new singleNote("My other favourite language is JacaScript");
      var notelist = new noteList();

      notelist.newNote(noteRB);
      notelist.newNote(noteJS);

      nlm = notelist.showNote();
      var viewNotes = new noteListView(nlm);

      assert.isTrue(viewNotes.showHTML() == '<ul><li><div>My other favourite language is Ruby</div></li><li><div>My other favourite language is JavaScript</div></li></ul>');
      if (assert){console.log("listNotes: PASSED!!!")}

  };

    listNotes();

function UnitTestSuite() {
    noteSearch = "My favourite language is JavaScript"
    var note = new singleNote(noteSearch);
    var notelist = new noteList();
    // notelist.notes.push(note.showText());

    function savesNoteToNotes() {
      notelist.saveNote(note);
      assert.isTrue(notelist.notes.includes(note))
      if (assert){console.log("savesNoteToNotes: PASSED!!!!")};
    };

    savesNoteToNotes();

    function showsListOfNotes(){
      assert.isTrue(notelist.showNote()[0] == note)
      if (assert){console.log("showsListOfNotes: PASSED!!!!")};
    }

    showsListOfNotes();


    function findTextInNote() {
      assert.isTrue(notelist.findANote(noteSearch) == note)
      if (assert){console.log("findTextInNote: PASSED!!!!")};
    };

    findTextInNote();

};

UnitTestSuite();

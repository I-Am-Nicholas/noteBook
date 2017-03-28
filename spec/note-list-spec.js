function UnitTestSuite() {
    noteSearch = "My favourite language is JavaScript"
    var note = new singleNote(noteSearch);
    var notelist = new noteList();
    notelist.notes.push(note.showText());

    function savesNoteToNotes() {
      assert.isTrue(notelist.notes == noteSearch)
      if (assert){console.log("savesNoteToNotes: PASSED!!!!")};
    };

    savesNoteToNotes();

    function findTextInNote() {
      notelist.aNote(noteSearch)
      assert.isTrue(notelist.notes.includes(noteSearch))
      if (assert){console.log("findTextInNote: PASSED!!!!")};
    };

    findTextInNote();

};

UnitTestSuite();

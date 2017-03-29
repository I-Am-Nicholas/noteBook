function listNotes() {
  // var noteJS = new singleNote("My favourite language is JavaScript");
  var noteRB = new singleNote("My other favourite language is Ruby");
  var notelist = new noteList();

  notelist.newNote(noteRB);

  nlm = notelist.showNote();

  var viewNotes = new noteListView(nlm);

  assert.isTrue(viewNotes.showHTML()[0] == '<ul><li>My other favourite language is Ruby</li></ul>');
  if (assert){console.log("listNotes: PASSED!!!")}

};

  listNotes();

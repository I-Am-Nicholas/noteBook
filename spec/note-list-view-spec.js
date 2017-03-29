function listNotes() {
  // var noteJS = new singleNote("My favourite language is JavaScript");
  var noteRB = new singleNote("My other favourite language is Ruby");
  var notelist = new noteList();
  var viewNotes = new noteListView();

  notelist.notes.push(notelist.saveNote());

  assert.isTrue(viewNotes.showHTML("My other favourite language is Ruby") == "<ul><li>My other favourite language is Ruby</li></ul>");
  if (assert){console.log("listNotes: PASSED!!!")};
};

listNotes();

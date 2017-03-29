function listNotes() {
  var noteJS = new singleNote("My favourite language is JavaScript");
  var noteRB = new singleNote("My other favourite language is Ruby");
  var notelist = new noteList();
  var viewNotes = new noteListView();
  var vn = viewNotes.viewNoteList(notelist.notes);
  console.log("500"+notelist.note)

  notelist.notes.push(noteJS.showText());
  notelist.notes.push(noteRB.showText());
  // console.log(viewNotes.html1)

  assert.isTrue(vn == );
  if (assert){console.log("listNotes: PASSED!!!")};
};

listNotes();

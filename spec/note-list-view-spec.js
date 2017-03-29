function listNotes() {
  // var noteJS = new singleNote("My favourite language is JavaScript");
  var noteRB = new singleNote("My other favourite language is Ruby");
  var notelist = new noteList();
  var viewNotes = new noteListView();

  assert.isTrue(viewNotes.showHTML("My other favourite language is Ruby")[0] == '<ul><li>My other favourite language is Ruby</li></ul>');
  if (assert){console.log("listNotes: PASSED!!!")};
};

listNotes();

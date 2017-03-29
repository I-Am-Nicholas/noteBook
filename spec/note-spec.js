function savesNote() {
  var note = new singleNote("My favourite language is JavaScript");
  assert.isTrue(note.showText() == "My favourite language is JavaScript")
    if (assert){console.log("savesNote: PASSED!!!")};
};

savesNote();

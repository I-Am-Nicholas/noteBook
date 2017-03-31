function singleNoteViewCanBeInstantiated() {
  var note = new singleNote("This is a note")
  var snv = new SingleNoteView(note)
  assert.isTrue(snv.arg === note)
  if (assert){console.log("singleNoteViewCanBeInstantiated: PASSED!!!!")};
}

singleNoteViewCanBeInstantiated()

function methodConvertsNotesToHTML() {
  var note = new singleNote("Naps are great!")
  var snv = new SingleNoteView(note)
  assert.isTrue(snv.noteToHtml() === "<div>Naps are great!</div>")
  if (assert){console.log("methodConvertsNotesToHTML: PASSED!!!!")};
}

methodConvertsNotesToHTML()

function noteControllerTest() {
  var string = "ThreeHoursSleep!"
  var noteCon = new NoteController(string);

  assert.isTrue( noteCon.noteListObj === string )
  if (assert){console.log("noteControllerTest: PASSED!!!!")};
};

noteControllerTest();

function getHtmlReturnsHtmlList() {
  function mockElement() {
    this.innerHTML = "MOCKING!"
  }

  var mock = new mockElement()
  var list = new noteList()
  var note = new singleNote("Favourite food: pesto")
  list.newNote(note)

  var noteCon = new NoteController(list)
  var view = noteCon.createNoteListView()
  var string = "<ul><li><div>Favourite food: pesto</div></li></ul>"

  noteCon.getHTML(view, mock)


  assert.isTrue(mock.innerHTML == string)
  if (assert){console.log("getHtmlReturnsHtmlList: PASSED!!!!")};
};

getHtmlReturnsHtmlList()

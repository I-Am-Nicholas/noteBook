function noteControllerTest (){
  var string = "ThreeHoursSleep!"
  var noteCon = new NoteController(string);

  assert.isTrue( noteCon.noteListObj === string )
  if (assert){console.log("noteControllerTest: PASSED!!!!")};
};

noteControllerTest();

function getHtmlReturnsHtmlList() {
  function MockElement() {
    this.innerHTML = "MOCKING!"
  }

  var mock = new MockElement()
  var list = new noteList()

  list.newNote("Favourite food: pesto")

  var noteCon = new NoteController(list)
  var view = noteCon.createNoteListView()
  var string = "<ul><li><div>Favourite food: pesto</div></li></ul>"

  noteCon.getHTML(view, mock)


  assert.isTrue(mock.innerHTML == string)
}
getHtmlReturnsHtmlList()

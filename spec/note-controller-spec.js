function noteControllerTest (){
  var string = "ThreeHoursSleep!"
  var noteCon = new NoteController(string);

  assert.isTrue( noteCon.noteListObj === string )
  if (assert){console.log("noteControllerTest: PASSED!!!!")};

};

noteControllerTest();

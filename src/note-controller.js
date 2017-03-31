(function(exports){

  function NoteController(noteListObj){
    this.noteListObj = noteListObj;
  }

  NoteController.prototype.createNoteListView = function(){
    var noteListView = new NoteListView(this.noteListObj);
    return noteListView
}

  NoteController.prototype.getHTML = function(object, element = document.getElementById("app")){
    var element = element;
     console.log(element.innerHTML)
    element.innerHTML = object.showHTML();
    // console.log(object.showHTML())
     console.log(element)
  }

exports.NoteController = NoteController;
})(this);

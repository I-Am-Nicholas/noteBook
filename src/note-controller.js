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
    element.innerHTML = object.showHTML();
  }

exports.NoteController = NoteController;
})(this);

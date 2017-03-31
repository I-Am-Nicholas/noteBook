(function(exports){

  function NoteController(noteListObj){
    this.noteListObj = noteListObj;
  }

//   NoteController.prototype.createNoteListView = function(){
//     this.noteListView = new noteListView(this.noteListObj);
// }
//
//   NoteController.prototype.getHTML = function(){
//     var element = document.getElementById("app");
//     element.innerHTML = this.noteListView.showHTML();
//   }
//
exports.NoteController = NoteController;
})(this);

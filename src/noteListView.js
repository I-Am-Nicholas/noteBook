(function(exports){

  function NoteListView(noteListModel) {
    this.noteListModel = noteListModel;
  };

  NoteListView.prototype.showHTML = function() {
    // broke these down as variables so it was easier to see
    // what was being mapped
    var list = this.noteListModel
    console.log(list.notes)
    var notes = list.notes
    // console.log(notes)
    var noteToHtml = notes.map(function(note){
      console.log(note)
      return note;
    });

    if (noteToHtml.length !== 0) {
      return ("<ul><li><div>" + noteToHtml.join("</div></li><li><div>") + "</div></li></ul>")
    } else {
      return ("<ul><li><div></div></li></ul>")
    }

  };
  exports.NoteListView = NoteListView;
})(this);

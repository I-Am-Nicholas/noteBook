(function(exports){

  function NoteListView(noteListModel) {
    this.noteListModel = noteListModel;
  };

  NoteListView.prototype.showHTML = function() {
    // broke these down as variables so it was easier to see
    // what was being mapped
    var list = this.noteListModel
    var notes = list.notes
    var noteToHtml = notes.map(function(note){
      return note.text;
    });

    if (noteToHtml.length !== 0) {
      return ("<ul><li><div>" + noteToHtml.join("</div></li><li><div>") + "</div></li></ul>")
    } else {
      return ("<ul><li><div></div></li></ul>")
    }

  };
  exports.NoteListView = NoteListView;
})(this);

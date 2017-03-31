(function(exports){

  function noteListView(noteListModel) {
    this.noteListModel = noteListModel;
  };

  noteListView.prototype.showHTML = function() {
    var noteToHtml = this.noteListModel.map(function(noteText){
      return noteText.text;
    });

    if (noteToHtml.length !== 0) {
      return ("<ul><li><div>" + noteToHtml.join("</div></li><li><div>") + "</div></li></ul>")
    } else {
      return ("<ul><li><div></div></li></ul>")
    }

  };
  exports.noteListView = noteListView;
})(this);

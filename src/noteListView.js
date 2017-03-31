(function(exports){

  function noteListView(noteListModel) {
    this.htmlConverter = [];
    this.noteListModel = noteListModel;
  };

  noteListView.prototype.showHTML = function() {
    this.htmlConverter.push(this.noteListModel);
    var noteToHtml = this.htmlConverter.map(function(noteText){
      return noteText;
    });

    if (noteToHtml.length !== 0) {
      return ("<ul><li><div>"+noteToHtml.join("</div></li><li><div>") + "</div></li></ul>")
    } else {
      return ("<ul><li><div></div></li></ul>")
    }

  };
  exports.noteListView = noteListView;
})(this);

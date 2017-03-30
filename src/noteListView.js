(function(exports){

  function noteListView(noteListModel) {
    this.html1 = [];
    this.noteListModel = noteListModel;
  };

  noteListView.prototype.showHTML = function() {
    this.html1.push(this.noteListModel);
    var noteToHtml = this.html1[0].map(function(noteText){
      return noteText.text;
    });
    if (noteToHtml.length !== 0) {
    return ("<ul><li><div>"+noteToHtml.join("</div></li><li><div>")+ "</div></li></ul>")
  } else {
    return ("<ul><li><div></div></li></ul>")
  }
};
  exports.noteListView = noteListView;
})(this);

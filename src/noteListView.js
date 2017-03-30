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

    return ("<ul><li><div>"+noteToHtml.join("</div></li><div><li>")+ "</div></li></ul>")
  };

  exports.noteListView = noteListView;
})(this);

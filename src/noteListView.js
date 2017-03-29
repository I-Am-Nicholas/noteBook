(function(exports){

  function noteListView(noteListModel) {
    this.html1 = [];
    this.noteListModel = noteListModel;
  };

  noteListView.prototype.showHTML = function() {
      this.html1.push(this.noteListModel);

      return this.html1[0].map(function(html){
        return("<ul><li>"+html.text+"</li></ul>")
      })
  };

  exports.noteListView = noteListView;
})(this);

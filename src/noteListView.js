(function(exports){

  function noteListView() {
    this.html1 = [];
  };

  noteListView.prototype.showHTML = function(listOfNotes) {
      this.html1.push(listOfNotes)
      return("<ul><li>"+this.html1[0]+"</li></ul>")
  };

  exports.noteListView = noteListView;
})(this);

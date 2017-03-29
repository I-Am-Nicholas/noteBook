(function(exports){

  function noteListView() {
    this.html1 = [];
  };

  noteListView.prototype.showHTML = function(listOfNotes) {
      this.html1.push(listOfNotes);
      return this.html1.map(function(html){
        return("<ul><li>"+html+"</li></ul>")
      })
  };

  exports.noteListView = noteListView;
})(this);

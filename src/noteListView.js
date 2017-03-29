(function(exports){

  function noteListView() {
    this.html1 = [];
    this.html2 = [];
  };

  noteListView.prototype.viewNoteList = function(listOfNotes) {
    console.log("listOfNotes: "+listOfNotes)
    listOfNotes.forEach(function(n){
    this.html1.push(("<li><div>"+n+"</div></li>"))
    })

    return listOfNotes;
  };

  exports.noteListView = noteListView;
})(this);

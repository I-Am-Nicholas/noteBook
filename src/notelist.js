(function(exports){

  function noteList() {
     this.notes = [];
  };

  noteList.prototype.showNote = function() {
    this.notes.push(singleNote);
    return this.notes;
  };

  noteList.prototype.aNote = function(words) {
      this.notes.forEach(function(x){
       if (x == words) {return x} 
      })
  }
  exports.noteList = noteList;
})(this);

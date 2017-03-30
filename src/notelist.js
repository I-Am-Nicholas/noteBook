(function(exports){

  function noteList() {
    this.notes = [];
  };

  noteList.prototype.showNote = function() {
    return this.notes;
  };

  noteList.prototype.newNote = function(note){
    this.note = note
    this.notes.push(this.note);
  };

  noteList.prototype.findANote = function(words) {
    return this.notes.find(function(x){
       return x.text == words
      })
  }
  exports.noteList = noteList;
})(this);

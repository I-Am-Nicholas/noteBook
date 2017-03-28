(function(exports){

  function singleNote(note) {
    this.text = note
  };

  singleNote.prototype.showText = function() {
    return this.text
  };

  exports.singleNote = singleNote;
})(this);

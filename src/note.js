(function(exports){

  function singleNote(noteText) {
    this.text = noteText
  };

  singleNote.prototype.showText = function() {
    return this.text
  };

  exports.singleNote = singleNote;
})(this);

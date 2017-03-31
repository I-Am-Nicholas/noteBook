(function(exports) {
    function SingleNoteView(noteObj) {
      this.arg = noteObj
  }

  SingleNoteView.prototype.noteToHtml = function() {
    return "<div>" + this.arg.text + "</div>"
  }

  exports.SingleNoteView = SingleNoteView
})(this)

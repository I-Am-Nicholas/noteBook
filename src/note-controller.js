(function(exports){
  function GetDiv() {
    var element = document.getElementById("app");
    element.innerHTML = "howdy";
    console.log(element)
  }

exports.GetDiv = GetDiv
})(this);

GetDiv();

var myScrollFunc = function(){
  var myID = document.getElementById("sharer");
  var y = window.scrollY;
  if (y >= 200) {
    myID.className = "sticky-container show"
  }else{
    myID.className = "sticky-container hide"
  }
};

window.addEventListener("scroll", myScrollFunc);

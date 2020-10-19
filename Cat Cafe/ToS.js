$(document).ready(function() { //Slick function
  var editor = new MediumEditor('.editable');
});


function loadDoc() { //AJAX External website request
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       document.getElementById("olderTOS").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "https://webpages.uncc.edu/kkim36/Project_AJAX.txt", true); //Website
    xhttp.send();
}
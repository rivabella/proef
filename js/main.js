$(document).ready(function() {
  alert("loaded");
  // javascript
  document.getElementById('peter').innerHTML = "this is my tekst";
// je gebruikt in jquery dezelfde . en # als in css dus voor een class. en voor id #
// jquery
$('#peter').html("dit is nu mijn text");

// javascript
document.getElementsByClassName('info').value = "Waarde";
// je gebruikt in jquery dezelfde . en # als in css dus voor een class. en voor id #
// jquery
$('.info').val("dit is nu mijn text");

})

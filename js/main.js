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

var tekst = document.getElementById('peter');
// javascript
console.log("tekst is", tekst);
// jquery
console.log("tekst is:", $(tekst);
$('#go').on('click', function(){
  alert("piepo");
})
// $('[data-trigger="dropdown"]').on('mouseover', is de trigger dus als de muis erover
// heen gaat wordt de functie aangeroepen
$('[data-trigger="dropdown"]').on('mouseover',function(){
  // variabele= a regel 21
  var submenu = $(this).parent().find('.submenu');
  // omdat er al een $ in de variabele zit hoeft dat niet hieronder
  submenu.addClass('active');
})

})



$(document).ready(function() {

  console.log($('.submenu a').first().text());
    console.log($('.submenu a').last().text());
$('#top-stories').find('.article-image').addClass('haha');
$('input').focusout(function(){
$('span').html("het is goed")
  console.log("hallo");
});
$('input').focusout(function(){
  if ($(this).val().indexOf('@')>1 && $(this).val().indexOf('.')>1) {
    $('.status').html("valid email");
  }else{
    $('.status').html('try again');
  }
});
$('p:contains("Lorem")').html("this texks beval lorem");

if($(':contains("lorem")').hasClass('my-selector')) {
console.log("has class my-selector");
}
});
// // H74 om de functie uit second.js te halen moet je hem aangeroepen
// // via var s = new rquery("lorem");
// // var s = new rquery("lorem");
// // je roept de functie qQuery aan waardoor de class accesible wordt.In de class
// // staat de functie addClass deze kun je toepassen door alleen een punt toe te voegen
// // met de functie erachter
// // rQuery(".lorem").addClass("make-class");
// // rQuery('#main').addClass("proef");
// // $==jquery,jQuery is een class declaration.jQuery(document).on('mousedown'
// // lijkt nu een functie
// jQuery(document).on('mousedown',function(event){
//   event.stopPropagation();
//
//
//
//   if(event.which == 1){
//       $('hidden').removeClass('shown');
//       if($(event.target).is('jpg')){
//         $('.saveimg, .newtab').addClass('shown');
//       }
//     console.log(event.pageY,event.pageX);
//     $('#context').css({
//       top: event.pageY,
//       left: event.pageX    });
//
//     $('#context').fadeIn();
//     return false;
//
//   }
//   $('#context').fadeOut();
// })
//   alert("loaded");
//   // javascript
//   document.getElementById('peter').innerHTML = "this is my tekst";
// // je gebruikt in jquery dezelfde . en # als in css dus voor een class. en voor id #
// // jquery
// $('#peter').html("dit is nu mijn text");
//
// // javascript
// document.getElementsByClassName('info').value = "Waarde";
// // je gebruikt in jquery dezelfde . en # als in css dus voor een class. en voor id #
// // jquery
// $('.info').val("dit is nu mijn text");
//
// var tekst = document.getElementById('peter');
// // javascript
// console.log("tekst is", tekst);
// // jquery
// console.log("tekst is:", $(tekst));
// $('#go').on('click', function(){
//   alert("piepo");
// });
// // $('[data-trigger="dropdown"]').on('mouseover', is de trigger dus als de muis erover
// // heen gaat wordt de functie aangeroepen
// $('[data-trigger="dropdown"]').on('mouseover',function(){
//   // variabele= a regel 21
//   var submenu = $(this).parent().find('.submenu');
//   // omdat er al een $ in de variabele zit hoeft dat niet hieronder
//   submenu.addClass('active');
// })
// // targeting multiple elements using the event
// // e staat voor event
// $('#append, #prepend, #replace').on('click',function(e){
// console.log(e);
// // in de lijst van console log zie je currenTarget die je aanraken
// // roept door e.currenTarget
// var el = $(e.currentTarget);
// // getting atributes of jquery opjects
// var action = el.attr('id');
// var value = $('textarea[name="text"]').val();
// console.log(value);
// if(action== "append"){
//   console.log("appendinng...");
//   $("#main").append(value);
// }else if (action == "prepend") {
//   console.log("preppendinng...");
//     $("#main").prepend(value);
// } else if (action == "replace") {
//   console.log("replacinng...");
//     $('#main').text(value);
// }else {
//
// }
//
// });
// });

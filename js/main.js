
// var hallo = "Wat een mooie leeftijd";
// var riva = "hopla";
// const alles = ['water','brood', 'piza'];
// console.log(alles.join('-'));
// var leeftijd = 42;
// var exact = 42.9;
// alert(leeftijd + " is mijn leeftijd nu");
// leeftijd = leeftijd + 1;
// console.log(leeftijd + "en dit volgend jaar");
// leeftijd++;
// console.log(leeftijd + "en dit het jaar erna");
// var hopla = "zomer";
// alert(hopla + "fijne zomer");
//
// alert(hallo);
// var pablo = true;
//
// if(pablo==true){
//   console.log("zo zit dat")
// }else{
//   console.log("zo zit dat niet")
// }
//
// var leeftijd =28;
//
// if(leeftijd<3){
//   console.log("je bent een baby")
// }else if(leeftijd<10){
//   console.log("je bent bijna een tiener")
// }else if(leeftijd>=18){
//   console.log("je bent een volwassene ")
// }else{
//   console.log("je bent niet in onze database")
// }
// for(var optellen=10; optellen>4; optellen--){
//  console.log("het getal is nu", optellen);
// }
var btn= document.getElementById("go");
function buttonClicked(){
  console.log("button clicked");
  btn.removeEventListener("click", buttonClicked);
  document.getElementById("peter").innerHTML="ik ben peter";

}
btn.addEventListener("click",buttonClicked);

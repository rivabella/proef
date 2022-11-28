
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
// var btn= document.getElementById("go");
//
// function buttonClicked(){
//   // console.log("button clicked");
//   var my_answer= document.getElementsByClassName("info");
//   var text_output = document.getElementById("peter");
//   text_output.innerHTML= "Hallo " + my_answer[0].value;
//   // btn.removeEventListener("click", buttonClicked);
//   // document.getElementById("peter").innerHTML="ik ben peter";
//   // console.log(document.getElementById("peter").innerHTML);
// }
//
// btn.addEventListener("click",buttonClicked);

// var hobbies = ["voedbal", "tennis", "korfbal"];
// console.log("dit waren mijn hobbies",hobbies);
//
// console.log("deze gaat weg", hobbies.pop());
// hobbies.push("baskedbal");
// console.log("Dit zijn mijn hobbies nu", hobbies);
// console.log("dit is mijn favo", hobbies[hobbies.length-1]);
// hobbies.forEach(function(print,){
//   console.log("i like",print)
// });
// hobbies.shift();
// hobbies.forEach(function(print,){
//   console.log("i like",print)
// });
// hobbies.unshift("wielrennen")
// hobbies.forEach(function(print,){
//   console.log("i like",print)
// });
// var indexnum= hobbies.indexOf("baskedbal");
// console.log(indexnum);
//
// hobbies.splice(indexnum,1);
// console.log(hobbies);
// if(hobbies.indexOf("wielrennen")>-1){
//   console.log("wielrennen is in de array");
// }
// if(hobbies.indexOf("sport") > -1){
//
// }else{
//   console.log("Sport is niet in de array");
// }
// function saySomething(phrase){
//   alert("you said:" + phrase);
// }
// var p ="how are you?";
// saySomething(p);
//zet het inkomende in de functie op params en voeg params. toe aan de variabele zodat de waardes van 1 erin gezet kunnen worden

// var nummers = [ 7, 8, 15, 16, 17, 18, 10, 11, 12, 13, 14, 9, 18, 20, 3, 4, 5];
// var result=[];
// var count = 21;
// //in deze worden de cijvers echt in de goede volgorde gezet
// function compareNumbers(a, b) {
//   return a - b;
// }
// //hier worden de nummer gesorteerd
// var sorted = nummers.sort(compareNumbers);
// //sorted[0] hierbij begint het getal altijd bij het eerste dus als je de cijvers 0,1,2, weghaald begint het gewoon bij 3
//  for(i=sorted[0];i<count;i++){
//    if(nummers.indexOf(i)==-1)
//    {result.push(i)};
//  }
//  console.log(result);
// //dit is de sort funtie die wordt zometeen en de for loop gezet
// function sortNummers(){
//   nummers.sort();
//
// return nummers;
// }
// sortNummers(nummers);
// console.log(nummers);

//maak een class
class Animal{
  //in een class moet een constructor om de class te laten werken hier gaan properties in (naam etc.)
  constructor(naam, height, weight){
    //de constructor runs elke keer dat er een animals gemaakt wordt zie regel125
    console.log("dier dat gemaakt is heet", naam)
    // this is voor het object wat gemaakt is dus in dit geval dog en fish
    // we nemen de parameters die alleen in de constructor te gebruiken zijn en we maken properties van het object
    this.naam = naam;
    this.height =height;
    this.weight = weight;
  }
// met this ervoor kan je de parameters van het object ook gebruiken buiten de constructor
  nameLength(){
    return this.naam.length;
  }

}
// de parapeters("doggie" etc.) worden direct in de constructor gezet
var dog = new Animal("doggie", 2, 3 );
var fish = new Animal("fishy", 2, 3);
// zo roep je de method in de class van het obect aan het object is dus nu dog
console.log(dog.nameLength());

// bij jquery is het onderstaande ingebouwd.
class rquery {
  constructor(el) {
    if(el.indexOf('.')>-1){
      el = el.replace(".","");
      this.element = document.getElementsByClassName(el);
    }else if (el.indexOf('#')>-1) {
    el =  el.replace("#","");
      this.element = [document.getElementsByClassName(el)];
    }else {
      this.element = document;
    }

  }

  addClass(cl){
    var count=0;
    var length = this.element;

    while (count < length) {
      if(this.element[].count.className){
          this.element[count].className += " " +cl;
      }else{
        this.element[count].className +cl;
      }

      // var blub = this.element[count].className += " " +cl;

      count++;
    }
  }
}

// omdat we geen var s = new rquery("lorem"); in main.js willen
// zetten maken we ondersttande functie
// de class rquery(boven)is alleen accesible via onderstaande functie
function rQuery(el) {
  var element = new rquery(el);
  return element;
}

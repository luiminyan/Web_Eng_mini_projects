//prototyping example from exercise course

//declare the object
var Gegenstand = {
    //attrbutes
    bezeichner : null,
    gewicht : null,

    //getter & setter functions
    getBeschreibung: function() {
        console.log(this.bezeichner);
    },

    getGewicht: function(){
        console.log(this.gewicht + "g");
    }
}

/* //var einGegenstand = Object.create(); -> error: not specified which object to create
var einGegenstand = Object.create(Gegenstand);  //solution: create Gegenstand object
einGegenstand.gewicht = 100;
console.log('Call the getGewicht() function.');
einGegenstand.getGewicht();
console.log('Print attribute Gewicht directly in concole: ' + einGegenstand.gewicht + ' g.'); */

var Kugel = Object.create(Gegenstand);
Kugel.radius = null;    
/* radius is not declared in Gegenstand. 
   but in ES6, this is not a problem
   radius will be drirectly added in the prototype kugel as an attribute
*/

//rewrite the function getBeschreibung
Kugel.getBeschreibung = function(){
    console.log(this.bezeichner);
    //something from the ES6: the math functions
    console.log('Oberflaeche = ' + 4 * Math.PI * Math.pow(this.radius, 2)); 
}

var Wuerfel = Object.create(Gegenstand);
Wuerfel.seitenlaengen = null;
Wuerfel.getBeschreibung = function(){
    console.log(this.bezeichner);
    console.log('Oberflaeche = ' + 6 * Math.pow(this.seitenlaengen, 2)); 
}

//create the instances of the Gegenstande
var eineKugel = Object.create(Kugel, {
    bezeichner : {value : 'eine Kugel'},
    gewicht : {value : 4},
    radius : {value : 2}
}); //extra parameter

var eineWuerfel = Object.create(Wuerfel, {
    bezeichner : {value : 'eine Kugel'},
    gewicht : {value : 6},
    seitenlaengen : {value : 3}
}); //extra parameter

//call the functions
eineKugel.getBeschreibung();
eineKugel.getGewicht();
eineWuerfel.getBeschreibung();
eineWuerfel.getGewicht();

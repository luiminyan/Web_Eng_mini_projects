// ES6
class Gegenstand {
    constructor(bezeichner, gewicht){
        this._bezeichner = bezeichner;
        this._gewicht = gewicht;
    }
    getBeschreibung(){
        // 错误： 需要在function里定义let，才能使用let result
        let result = "Bezeichner: " + this._bezeichner;
        console.log(result);
        console.log(this._bezeichner);
    }
    getGewicht(){
        return this._gewicht;
    }
} 

class Kugel extends Gegenstand{
    constructor(bezeichner, gewicht, radius){
        super(bezeichner, gewicht);
        this._radius = radius;
    }
    getBeschreibung(){
        console.log(this._bezeichner + ", radius: " + this._radius + ", gewicht: " +this._gewicht);
    }
}

var gegenstand01 = new Gegenstand("G01", 15);
gegenstand01.getBeschreibung();
console.log(gegenstand01.getGewicht());

var kugel = new Kugel("K01", 4.5, 2);
kugel.getBeschreibung();

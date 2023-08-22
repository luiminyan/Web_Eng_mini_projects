import { Extension } from "typescript";

class Gegenstand {
    bezeichner : string;
    gewicht : number;

    // constructor
    constructor(bezeichner : string, gewicht: number) {
        this.bezeichner = bezeichner;
        this.gewicht = gewicht;
    }

    // getters & setters
    getBezeichner() {
        return this.bezeichner;
    }

    setBezeichner(bezeichner : string) {
        this.bezeichner = bezeichner;
    }

    getGewicht() {
        return this.gewicht;
    }

    setGewicht(gewicht : string) {
        this.gewicht = this.gewicht;
    }

    printInfo () {
        console.log(`Bezeichner: ${this.bezeichner}, Gewicht: ${this.gewicht}`);
    }
}

class Kugel extends Gegenstand {
    radius : number;
    // constructor
    constructor (bezeichner : string, gewicht: number, radius : number) {
        // call parent class constructor
        super(bezeichner, gewicht);
        this.radius = radius;
    }
    getRadius() {
        return this.radius;
    }

    setRadius(radius : string) {
        this.radius = this.radius;
    }

    printInfo () {
        console.log(`Bezeichner: ${this.bezeichner}, Gewicht: ${this.gewicht}, Radius: ${this.radius}`);
    }
}

class Wuerfel extends Gegenstand {
    seitenlaege : number;
    // constructor
    constructor (bezeichner : string, gewicht: number, seitenlaege : number) {
        // call parent class constructor
        super(bezeichner, gewicht);
        this.seitenlaege = seitenlaege;
    }
    getSeitenlaege() {
        return this.seitenlaege;
    }

    setSeitenlaege(seitenlaege : string) {
        this.seitenlaege = this.seitenlaege;
    }

    printInfo () {
        console.log(`Bezeichner: ${this.bezeichner}, Gewicht: ${this.gewicht}, Radius: ${this.seitenlaege}`);
    }
}

var kugel01 = new Kugel('kugel01', 10, 5);
kugel01.printInfo();
var wuerfel01 = new Wuerfel('wuerfel01', 20, 1);
wuerfel01.printInfo();

// tsc aufgabe1.ts
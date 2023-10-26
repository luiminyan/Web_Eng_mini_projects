// alle in TypeScript
var Paket = /** @class */ (function () {
    // constructor
    function Paket(beschreibung, gewicht, isVersand) {
        this.beschreibung = beschreibung;
        this.gewicht = gewicht;
        this.isVersand = isVersand;
    }
    // getters and setters
    Paket.prototype.getBeschreibung = function () {
        return this.beschreibung;
    };
    Paket.prototype.setBeschreinung = function (beschreibung) {
        this.beschreibung = beschreibung;
    };
    Paket.prototype.getGewicht = function () {
        return this.gewicht;
    };
    Paket.prototype.setGewicht = function (gewicht) {
        this.gewicht = gewicht;
    };
    Paket.prototype.getIsVersand = function () {
        return this.isVersand;
    };
    Paket.prototype.setIsVersand = function (isVersand) {
        this, isVersand = isVersand;
    };
    return Paket;
}());
var Versandhaus = /** @class */ (function () {
    function Versandhaus(Lagerraumarray) {
        this.Lagerraumarray = Lagerraumarray;
        this.Versandwagenarray = [];
        this.GesamtGewicht = 0;
    }
    Versandhaus.prototype.beladeVerandwagen = function () {
        var position = this.Lagerraumarray.length - 1;
        while (position >= 0) {
            var paket = this.Lagerraumarray[position];
            // Gesamtgewicht >= 3000
            if (paket.getGewicht() + this.GesamtGewicht >= 3000) {
                console.log("Overweight!");
                break;
            }
            // already Versandt
            else if (paket.getIsVersand() == true || this.Versandwagenarray.includes(paket)) {
                console.log("Paket ist schon versand!");
                continue;
            }
            // remove from Lagerraum
            this.Lagerraumarray.pop();
            // add weight in GesamtGewicht
            this.GesamtGewicht += paket.getGewicht();
            // set is versand
            paket.setIsVersand(true);
            // add into Versandwagen
            this.Versandwagenarray.push(paket);
            position--;
            console.log(paket.getBeschreibung() + " ist im Wagen gelagert!");
        }
    };
    return Versandhaus;
}());
var paket01 = new Paket("p01", 1500, false);
var paket02 = new Paket("p02", 1000, false);
var paket03 = new Paket("p03", 1000, false);
var versanhaus01 = new Versandhaus([paket01, paket02, paket03]);
versanhaus01.beladeVerandwagen();

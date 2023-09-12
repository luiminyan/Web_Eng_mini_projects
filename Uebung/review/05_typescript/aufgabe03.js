var Kunde = /** @class */ (function () {
    function Kunde(Name) {
        this.Name = Name;
    }
    Kunde.prototype.getName = function () {
        return this.Name;
    };
    return Kunde;
}());
var Bank = /** @class */ (function () {
    function Bank(Name, Bankleizahl) {
        this.Name = Name;
        this.Bankleitzahl = Bankleizahl;
        this.Kunden = [];
    }
    Bank.prototype.addKunden = function (newKunde) {
        this.Kunden.push(newKunde);
    };
    Bank.prototype.getName = function () {
        return this.Name;
    };
    Bank.prototype.getBankleitzahl = function () {
        return this.Bankleitzahl;
    };
    Bank.prototype.getKunden = function () {
        return this.Kunden;
    };
    return Bank;
}());
var kunde01 = new Kunde("Milan");
var kunde02 = new Kunde("Pupi");
var kunde03 = new Kunde("Shipan");
var bank01 = new Bank("Sparkasse Bochum", "BOXXX11");
bank01.addKunden(kunde01);
bank01.addKunden(kunde02);
bank01.addKunden(kunde03);
console.log(bank01.getName());
console.log(bank01.getKunden()[1].getName());

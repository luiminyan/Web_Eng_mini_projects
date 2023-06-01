//create class Kunde
var Kunde = /** @class */ (function () {
    //constructor
    function Kunde(Name) {
        this.Name = Name;
    }
    //getter
    Kunde.prototype.getName = function () {
        return this.Name;
    };
    return Kunde;
}());
//create class Bank
var Bank = /** @class */ (function () {
    //constructor
    function Bank(Name, BIC, KList) {
        this.Name = Name;
        this.Bankleitzahl = BIC;
        this.Kunden = KList;
    }
    //function addKunde
    Bank.prototype.addKunde = function (c) {
        this.Kunden.push(c);
    };
    //getters
    Bank.prototype.getName = function () {
        return this.Name;
    };
    Bank.prototype.getBankleitzahl = function () {
        return this.Bankleitzahl;
    };
    Bank.prototype.getKunden = function () {
        return this.Kunden;
    };
    Bank.prototype.printKundenName = function () {
        console.log(this.Name + ' has clients: ');
        this.Kunden.forEach(function (element) {
            console.log(element.getName());
        });
    };
    return Bank;
}());
//create instances
var client01 = new Kunde('Milan Mihajlovic');
var client02 = new Kunde('Minhua Liu');
var client03 = new Kunde('Shipan Liu');
var bank01 = new Bank("Sparkasse Bochum", "SPB463826", []);
var bank02 = new Bank("Sparkasse Duesseldorf", "SPD463727", []);
var bank03 = new Bank("Postbank", "PO4732", []);
var clientArray01 = [client01, client02, client03];
for (var c in clientArray01) {
    //var c is number, we need to add Kunde, so clientArray01[c]
    bank01.addKunde(clientArray01[c]);
    bank02.addKunde(clientArray01[c]);
    bank03.addKunde(clientArray01[c]);
}
//print out kundenlist of banks
bank01.printKundenName();
bank02.printKundenName();
bank03.printKundenName();

class Kunde {
    Name : string;
    constructor (name : string) {
        this.Name = name;
    }

    getName() {
        return this.Name;
    }
}

class Bank {
    Name : string;
    Bankleitzahl : string;
    Kunden : Kunde[];
    constructor (name : string, blz : string, Kunden : Kunde[]) {
        this.Name = name;
        this.Bankleitzahl = blz;
        this.Kunden = Kunden;
    }

    addKunde(kunde : Kunde) {
        this.Kunden.push(kunde);
    }

    // getters
    getName() {
        return this.Name;
    }

    getBankleitzahl() {
        return this.Bankleitzahl;
    }

    getKunden() {
        return this.Kunden;
    }
}

// create 3 x Kunde, 1 x Bank
var kunde01 = new Kunde("Sarah");
var kunde02 = new Kunde("Milan");
var kunde03 = new Kunde("Alex");

var kundenListe = [kunde01, kunde02, kunde03];

var bank = new Bank("Sparkasse Bochum", "BOXXXXXX", kundenListe);
console.log(`Bank Name: ${bank.getName()}`);
console.log(`BLZ: ${bank.getBankleitzahl()}`);

// for ... of: get value of iterable object
console.log("Get value by for ... of ...");
for (var k of bank.getKunden()) {
    console.log(k.getName());
}

// for ... in: get index of object
console.log("\nGet index by for ... in ...");
for (var i in bank.getKunden()) {
    console.log(bank.getKunden()[i].getName());
}

// forEach also possible



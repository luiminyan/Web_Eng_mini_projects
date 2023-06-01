//create class Kunde
class Kunde{
    //attribute
    Name : String;

    //constructor
    constructor(Name:String){
        this.Name = Name;
    }

    //getter
    getName(){
        return this.Name;
    }
}

//create class Bank
class Bank{
    //attributes
    Name : String;
    Bankleitzahl : String;
    Kunden : Kunde[]; //second method to create array in typescript
    
    //constructor
    constructor(Name:string, BIC: String, KList: Kunde[]){
        this.Name = Name;
        this.Bankleitzahl = BIC;
        this.Kunden = KList;
    }

    //function addKunde
    addKunde(c : Kunde){
        this.Kunden.push(c);
    }

    //getters
    getName(){
        return this.Name;
    }

    getBankleitzahl(){
        return this.Bankleitzahl;
    }

    getKunden(){
        return this.Kunden;
    }

    printKundenName(){
        console.log(this.Name + ' has clients: ');
        this.Kunden.forEach(element => {
            console.log(element.getName());
        });
    }
}

//create instances
var client01 =  new Kunde('Milan Mihajlovic');
var client02 =  new Kunde('Minhua Liu');
var client03 =  new Kunde('Shipan Liu');

var bank01 = new Bank("Sparkasse Bochum", "SPB463826", []);
var bank02 = new Bank("Sparkasse Duesseldorf", "SPD463727", []);
var bank03 = new Bank("Postbank", "PO4732", []);

var clientArray01 = [client01, client02, client03];
for (var c in clientArray01){
    //var c is number, we need to add Kunde, so clientArray01[c]
    bank01.addKunde(clientArray01[c]);
    bank02.addKunde(clientArray01[c]);
    bank03.addKunde(clientArray01[c]);
}

//print out kundenlist of banks
bank01.printKundenName();
bank02.printKundenName();
bank03.printKundenName();




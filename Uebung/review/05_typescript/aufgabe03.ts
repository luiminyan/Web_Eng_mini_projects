class Kunde{
    Name: string;
    constructor(Name:string) {
        this.Name = Name;
    }
    getName():string{
        return this.Name
    }
}

class Bank{
    Name:string;
    Bankleitzahl:string;
    Kunden:Kunde[];
    constructor(Name, Bankleizahl){
        this.Name = Name;
        this.Bankleitzahl = Bankleizahl;
        this.Kunden=[];
    }
    addKunden(newKunde:Kunde):void{
        this.Kunden.push(newKunde);
    }
    getName():string{
        return this.Name;
    }
    getBankleitzahl():string{
        return this.Bankleitzahl;
    }
    getKunden():Kunde[]{
        return this.Kunden;
    }
}

var kunde01 = new Kunde("Milan");
var kunde02 = new Kunde("Pupi");
var kunde03 = new Kunde("Shipan");
var bank01 = new Bank("Sparkasse Bochum", "BOXXX11");
bank01.addKunden(kunde01);
bank01.addKunden(kunde02);
bank01.addKunden(kunde03);
console.log(bank01.getName());
console.log(bank01.getKunden()[1].getName())
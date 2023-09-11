// alle in TypeScript
class Paket{
    // attributes
    beschreibung: string;
    gewicht: number;
    isVersand: boolean;
    // constructor
    constructor(beschreibung: string, gewicht: number, isVersand: boolean){
        this.beschreibung = beschreibung;
        this.gewicht = gewicht;
        this.isVersand = isVersand;
    }
    // getters and setters
    getBeschreibung(): string{
        return this.beschreibung;
    }
    setBeschreinung(beschreibung:string): void{
        this.beschreibung = beschreibung;
    }
    getGewicht(): number{
        return this.gewicht;
    }
    setGewicht(gewicht: number): void{
        this.gewicht = gewicht;
    }
    getIsVersand(): boolean{
        return this.isVersand;
    }
    setIsVersand(isVersand: boolean): void{
        this,isVersand = isVersand;  
    }
}

class Versandhaus{
    Lagerraumarray: Paket[];
    Versandwagenarray: Paket[];
    GesamtGewicht: number;

    constructor(Lagerraumarray: Paket[]) {
        this.Lagerraumarray = Lagerraumarray;
        this.Versandwagenarray = [];
        this.GesamtGewicht = 0;
    }

    beladeVerandwagen(): void {
        var position = this.Lagerraumarray.length - 1;
        while (position >= 0) {
            let paket = this.Lagerraumarray[position];
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
            console.log( paket.getBeschreibung() + " ist im Wagen gelagert!");    
        }     
    }
}

var paket01 = new Paket("p01", 1500, false);
var paket02 = new Paket("p02", 1000, false);
var paket03 = new Paket("p03", 1000, false);
var versanhaus01 = new Versandhaus([paket01, paket02, paket03]);
versanhaus01.beladeVerandwagen();
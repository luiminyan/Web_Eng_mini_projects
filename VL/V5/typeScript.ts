interface Car{
    name : string;
    year? : number;
    readonly inspected : boolean;
}

function sell (obj : Car) {
    if (!(obj.inspected)) {
        console.log("Werkstatt aufsuchen.");
    }
    else {
        console.log(`${obj.name}, Baujahr: ${obj.year}, im Top Zustand! `);
    }
} 

sell({name : "Ford", year : 2002, inspected : false});
sell({name : "Ford KA", inspected : true});


interface Person {
    name : string;
    age : number;
}

class Firma {
    // personal = Person list
    personal : Person[];
    constructor (p : Person[]) {
        this.personal = p;
    }
}
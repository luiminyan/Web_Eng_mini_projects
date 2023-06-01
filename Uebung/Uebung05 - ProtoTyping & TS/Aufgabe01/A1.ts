class Obj{
    //atributes
    name: string;
    weight: number;

    //constructor
    constructor(name:string, weight:number){
        this.name = name;
        this.weight = weight;
    }

    //functions
    getDescription(){
        console.log(this.name);
    }
    getWeight(){
        console.log(this.weight + ' g');
    }
}

class Ball extends Obj{
    //attribute
    radius: number;

    //constructor
    constructor(name:string, weight:number, radius:number){
        //call parent class constructor
        super(name, weight);
        this.radius = radius;
    }

    //overwrite getDescription
    getDescription(){
        console.log(this.name + ' has surface ' + 4 * Math.PI * Math.pow(this.radius, 2));
    }
}

class Dice extends Obj{
    //attribute
    sideLength: number;

    //constructor
    constructor(name:string, weight:number, sideLength:number){
        //call parent class constructor
        super(name, weight);
        this.sideLength = sideLength;
    }

    //overwrite getDescription
    getDescription(){
        console.log(this.name + ' has surface ' + 6 * Math.pow(this.sideLength, 2));
    }
}

//create instances
var dice01 = new Dice('d01', 20, 5);
dice01.getWeight();
dice01.getDescription();
var ball01 = new Ball('b01', 10, 1);
ball01.getWeight();
ball01.getDescription();
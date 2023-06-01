//typescript: declare class
class Client{
    //with data type
    name: string;

    constructor(n: string){
        this.name = n;
    }

    getName(){
        return this.name;
    }
}

var alice = new Client("Alice");

console.log(alice.getName());
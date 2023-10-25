class StaticTest {
    #name;

    constructor(name) {
        this.#name = name;
    }

   static staticMethod() {
        return "Hello world!";
   }
}

console.log(StaticTest.staticMethod());



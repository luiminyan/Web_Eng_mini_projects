// console.log(window instanceof Window);
// console.log(document instanceof Document);
console.log(new Date() instanceof Object);

// create a class
/* // 1. use func
function CustomObject() {
} */

// 2. use a class
class CustomObject {
    // constructor of a class
    constructor() {
        // this.property = value
    }
}
console.log(new CustomObject() instanceof CustomObject);

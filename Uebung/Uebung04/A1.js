/* //Aufgabe 1
let int = 0;
let obj = {};
let arr = [10, 20, 30];
let dict = {name:'tiger', age:20};
function getName(dictObj){
    return dictObj.name;
}

function CustomObject(){}
let cusObject = new CustomObject();


console.log(this instanceof Window);
console.log(this.document instanceof Document);
console.log(typeof(int));   //number
console.log(typeof(obj));   //object
console.log(typeof(arr));   //object
console.log(typeof(dict));  //object
console.log(typeof(getName));  //function
console.log(typeof(CustomObject));  //function
console.log(typeof(cusObject));  //object

console.log(obj instanceof Object);     //true
console.log(arr instanceof Object);     //true
console.log(dict instanceof Object);     //true
console.log(getName instanceof Object);     //true
console.log(CustomObject instanceof Object);     //true
console.log(cusObject instanceof Object);     //true
console.log(cusObject instanceof CustomObject); //true, cusObject is an instance of CustomObject 
 */
//shift + opt + a






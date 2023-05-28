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

/* //Aufgabe 2
//example from VL: callback function
//define the callback function

function summePerCallback(x, y, callback){
    var result = x + y;
    //if callback is a function
    if (typeof(callback) === 'function'){
        callback(result);   //use result as parameter
    }
}
//call the function
summePerCallback(2, 3, function(result){
    console.log('The result of sum is : ' + result);
});

function addTax(amount, taxRate, callback){
    var result = amount + amount * taxRate;
    if (typeof(callback) === 'function') {
        callback(result);
    }
}

addTax(100, 0.1, function(result){
    console.log('The result of tax is : ' + result);
});

addTax(200, 0.2, function(result){
    var para = document.createElement('p');
    para.textContent = result;
    document.body.appendChild(para);
}); */

//Aufgabe 3
function scoping(){
    var v = 'Hello';
    const C = 'Function';
    //定义var 以后不能再定义let， 但是可以重写var
    
    console.log(v, C);
    console.log(v, C);
}

scoping();


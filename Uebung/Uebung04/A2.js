//Aufgabe 2

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

//Uebung04 A02
function addTax(amount, taxRate, callback){
    var result = amount + amount * (taxRate / 100);
    if (typeof(callback) === 'function') {
        callback(result);
    }
}

//不需要为callback function定义名字
addTax(100, 19, function(result){
    console.log('The result of tax is : ' + result);
});

addTax(200, 19, function(result){
    var para = document.createElement('p');
    para.textContent = result;
    document.body.appendChild(para);
});
var alphaArray:string[];    //declare string array
alphaArray = ['a', 'b', 'c', 'd'];
console.log(alphaArray[0]);     //a

//use for loop to iterate
console.log('\nUse loop to iterate array: ');
for (var i = 0; i < alphaArray.length; i++){
    console.log(alphaArray[i]);
}

//use for...in to iterate
console.log('\nUse for ... in to iterate array: ');
for (var j in alphaArray){
    //console.log(alphaArray[j]);
    console.log(j);
}

console.log('\nUse forEach to iterate array: ');
alphaArray.forEach(element => {
    console.log(element);
});

//create new array with Array constructor
var numArray:number[] = new Array(0, 1, 2, 3, 4);
//iterate the numArray
console.log("Iterate numArray");
for (var i = 0; i < numArray.length; i++){
    console.log(numArray[i]);
}
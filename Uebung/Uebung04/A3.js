//Aufgabe 3
//important for the exam
function scoping(){
    var v = 'Hello';
    const C = ' Function';   //const usualy written in capital case
    //in the same scoping: 定义var 以后不能再定义let， 但是可以重写var

    //the scope is onlt inside of the function
    function magic(){
        let C = ' Block';        //not conflicting
        console.log('call from new function magic() in scoping() ', v, C);
    }
    magic();    //call function magic in side of function scopeing()

    //anonymous self-calling function
    (   //the anonymous function
        function(){
            let C = ' Block';        //not conflicting
            console.log('call by anoymous self calling function ', v, C);
        }
    )();

    //if-else is also of its own scope
    if (true) {
        let C = " Block";
        console.log('print in if-else block ', v, C);
    }
    
    // console.log(v, C);
    console.log('print by scoping() ', v, C);
}

scoping();  //call the function scoping
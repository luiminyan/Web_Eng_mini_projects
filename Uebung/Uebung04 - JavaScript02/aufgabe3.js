function scoping() {
    var v = "Hello";
    const C = "Funktion";

    console.log(v, C);

    function magic() {
        
        console.log(v, C);
    }

}

// call function
scoping();

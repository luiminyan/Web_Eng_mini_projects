// call-back function: func is given as parameter, definition of func is given when calling function
function addTax(amount, taxRate, callback) {
    let result = amount + amount * (taxRate / 100);
    // do sth on the result of (paramter)
    return callback(result);
}

// connect with DOM elements: getElementById
var amountInput = document.getElementById('amount');
var rateInput = document.getElementById('taxrate');
var submitButton = document.getElementById('submitBtn');

submitButton.addEventListener('click', function(){
    var amount = parseFloat(amountInput.value);
    var rate = parseFloat(rateInput.value);

    addTax(amount, rate, function(result) {
         // create new element <p>
        var paragraph = document.createElement("p");
        paragraph.innerText = result;
        // append new element in body
        document.body.appendChild(paragraph);
    });

    // clean up / reset
    amountInput.value = 0;
    rateInput.value = 0;
});

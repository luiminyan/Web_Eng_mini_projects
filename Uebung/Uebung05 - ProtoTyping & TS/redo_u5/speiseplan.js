// connect the DOM-elements
var eingabe = document.getElementById('speiseEingabe');
var hinzifuegen = document.getElementById('hinzufuegen');
var entfernen = document.getElementById('entfernen');
var speiseplan = document.getElementById('Speiseplan');

// place to store added DOM elements
var addedElements = [];

// eventListener
hinzifuegen.addEventListener('click', ()=>{
    // create element p
    var newParagraph = document.createElement("p");
    // read input value, assign it to the new created p
    newParagraph.innerText = eingabe.value;
    // add into list
    addedElements.push(newParagraph);
    // append p into html
    document.body.appendChild(newParagraph);
});

entfernen.addEventListener('click', ()=>{
    // var toDelete = document.querySelector("p");  // delete the first in HTML found DOM element
    // pop the last element in list
    var toDelete = addedElements.pop();
    if (toDelete != null) {
        toDelete.remove();
    }
    else {
        alert("Menu is empty!");
        console.log("Element not found!");
    }
});

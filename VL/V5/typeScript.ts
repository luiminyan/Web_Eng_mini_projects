interface Car{
    name : string;
    year? : number;
    readonly inspected : boolean;
}

function sell (obj : Car) {
    if (!(obj.inspected)) {
        console.log("Werkstatt aufsuchen.");
    }
    else {
        console.log(`${obj.name}, Baujahr: ${obj.year}, im Top Zustand! `);
    }
} 

sell({name : "Ford", year : 2002, inspected : false});
sell({name : "Ford KA", inspected : true});


interface Person {
    name : string;
    age : number;
}

class Firma {
    // personal = Person list
    personal : Person[];
    constructor (p : Person[]) {
        this.personal = p;
    }

    // function
    sortByName() {
        // make a copy of the personal array
        var result = this.personal.slice(0);
        // alternative: var result = [...this.personal];

        // console.log(result);
        // 给sort添加比较function （arrow func.）
        result.sort((x, y) => {return x.name.localeCompare(y.name)});
        return result;
    }
}


var alex: Person = { name: 'Alex', age: 45 }; 
var maria: Person = { name: 'Maria', age: 42 };
var tabea : Person = { name: 'Tabea', age: 24 };
var maik : Person = { name: 'Maik', age: 32 };

var employeesList : Person[] = [alex, maria, tabea, maik];
var company01 = new Firma(employeesList);


console.log(company01.sortByName());


function loadTable (firma : Firma) {
    var tableBody = document.getElementById('tableData');
    var dataHTML = '';
    // key = index, value = name ... age ...
    for (let [key, value] of Object.entries(firma.personal)) {
        dataHTML += `<tr> <th> ${value.name} </th>`;
        dataHTML += ` <th> ${value.age} </th> </tr>`;
    }

    var loadBtn = document.getElementById('button');
    // !!!! ATTENTION :check not null of the DOM-elements
    if (loadBtn != null && tableBody != null) {
        loadBtn.addEventListener('click', () => {
            // reset the innerHTML of the DOM-element
            tableBody.innerHTML = dataHTML;
        });
    }
}

loadTable(company01);
function sell(obj) {
    if (!(obj.inspected)) {
        console.log("Werkstatt aufsuchen.");
    }
    else {
        console.log("".concat(obj.name, ", Baujahr: ").concat(obj.year, ", im Top Zustand! "));
    }
}
sell({ name: "Ford", year: 2002, inspected: false });
sell({ name: "Ford KA", inspected: true });
var Firma = /** @class */ (function () {
    function Firma(p) {
        this.personal = p;
    }
    // function
    Firma.prototype.sortByName = function () {
        // make a copy of the personal array
        var result = this.personal.slice(0);
        // alternative: var result = [...this.personal];
        // console.log(result);
        // 给sort添加比较function （arrow func.）
        result.sort(function (x, y) { return x.name.localeCompare(y.name); });
        return result;
    };
    return Firma;
}());
var alex = { name: 'Alex', age: 45 };
var maria = { name: 'Maria', age: 42 };
var tabea = { name: 'Tabea', age: 24 };
var maik = { name: 'Maik', age: 32 };
var employeesList = [alex, maria, tabea, maik];
var company01 = new Firma(employeesList);
console.log(company01.sortByName());
function loadTable(firma) {
    var tableBody = document.getElementById('tableData');
    var dataHTML = '';
    // key = index, value = name ... age ...
    for (var _i = 0, _a = Object.entries(firma.personal); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        dataHTML += "<tr> <td> ".concat(value.name, " </td>");
        dataHTML += " <td> ".concat(value.age, " </td> </tr>");
    }
    var loadBtn = document.getElementById('button');
    // !!!! ATTENTION :check not null of the DOM-elements
    if (loadBtn != null && tableBody != null) {
        loadBtn.addEventListener('click', function () {
            // reset the innerHTML of the DOM-element
            tableBody.innerHTML += dataHTML;
        });
    }
}
loadTable(company01);

var input = document.getElementById('speiseEingabe');
var addBtn = document.getElementById('hinzufuegen');
var deleteBtn = document.getElementById('entfernen');
var speisePlan = document.getElementById('Speiseplan');

// create class Speiseplan
class Speiseplan{
    static speiseListe = [];
    // 错误： 不需要写function
    static isIncluded(speiseItem) {
        /* for (item of this.speiseListe) {
            if (speiseItem == item) {
                return true;
                break;
            }
        }
        return false; */
        return this.speiseListe.includes(speiseItem);
    }
    static addSpeiseItem(speiseItem) {
        if (!this.isIncluded(speiseItem)){
            Speiseplan.speiseListe.push(speiseItem);
        }
        else alert("Speise already exists!");
    }

    static deleteSpeiseItem(speiseItem){
        if (Speiseplan.isIncluded(speiseItem)){
            Speiseplan.speiseListe.splice(Speiseplan.speiseListe.indexOf(speiseItem), 1);
        }
        else alert("Speise not in included!");
    }

    static printSpeiseListe(){
        speisePlan.textContent = '';
        for (let speise of this.speiseListe) {
            speisePlan.textContent += speise + ', ';
        }
    }
}

addBtn.addEventListener('click', function(){
    // read input value
    let inputValue = input.value;
    Speiseplan.addSpeiseItem(inputValue);
    Speiseplan.printSpeiseListe();
});

deleteBtn.addEventListener('click', function(){
    // read input value
    let inputValue = input.value;
    Speiseplan.deleteSpeiseItem(inputValue);
    Speiseplan.printSpeiseListe();
});
const checkDatum = (Datum1, Datum2) => {
    return Datum1.getTime() <= Datum2.getTime();
}
// testen die Funktion
let date1 = new Date(2020, 2, 1);
let date2 = new Date(2020, 2, 3);
console.log(checkDatum(date1, date2));    //写在console（控制台）里

//iterator
//set the 2D-Array for weather data
let wetterDaten = [
    [new Date(2020, 2, 1), 9, 61, 41],
    [new Date(2020, 2, 2), 7, 52, 38],
    [new Date(2020, 2, 3), 7, 45, 53],
    [new Date(2020, 2, 4), 5, 49, 65],
    [new Date(2020, 2, 5), 8, 55, 57],
    [new Date(2020, 2, 6), 12, 75, 42],
    [new Date(2020, 2, 7), 11, 80, 47],
    [new Date(2020, 2, 8), 13, 63, 50]
];

//iterator for WetterDaten
const iterWetterDaten = {
    currentIndex: 0, 
    [Symbol.iterator] : () =>{
        return{
            next : ()=>{
                if (iterWetterDaten.currentIndex < wetterDaten.length) {
                    iterWetterDaten.currentIndex++;
                    return{
                        value : {
                            datum : wetterDaten[iterWetterDaten.currentIndex - 1][0],
                            temparatur : wetterDaten[iterWetterDaten.currentIndex - 1][1],
                            windstaerke: wetterDaten[iterWetterDaten.currentIndex - 1][2],
                            luftfeuchtigkeit: wetterDaten[iterWetterDaten.currentIndex - 1][3]
                        },
                        done : false
                    }
                }
                else return {done : true}
            }
        }
    }
}

let subSetTemparatur = [];
let subSetWindstaerke = [];
let subSetLuftfeuchtigkeit = [];

//iterating
for (const wetter of iterWetterDaten){
    // console.log(wetter.datum);
    if( checkDatum(new Date(2020, 2, 3), wetter.datum) &&(checkDatum(wetter.datum, new Date(2020, 2, 5))) ){
        subSetTemparatur.push(wetter.temparatur);
        subSetLuftfeuchtigkeit.push(wetter.luftfeuchtigkeit);
        subSetWindstaerke.push(wetter.windstaerke);
    }
    
}

//mittelWert
const calcMittelWert = (wertenListe) =>{
    let sum = 0.00;
    let length = wertenListe.length;
    for (let i in wertenListe){
        sum += Number.parseFloat(wertenListe[i]);
    }
    return sum / length;
};

console.log('Temparatur Mittelwert: ' + calcMittelWert(subSetTemparatur));
console.log('Windstaerke Mittelwert: ' + calcMittelWert(subSetWindstaerke));
console.log('Luftfeuchtigkeit Mittelwert: ' + calcMittelWert(subSetLuftfeuchtigkeit));

           
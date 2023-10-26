// task 1 
var checkSum = (datum1, datum2) => {
    /* var date = new Date(...);
     * date.getTime();
     */
    return datum1.getTime() <= datum2.getTime();
};

/* //check if func is working
let dateA = new Date(2020, 10, 10);
let dateB = new Date(2020, 2, 10);
console.log(`checkfunc: ${checkSum(dateA, dateB)}`); */


// task 2
// create 2D-array for the weather elements
var weatherArray = [
    // new Date(year, month - 1, date)
    [new Date(2020, 1, 1), 9, 61, 41],
    [new Date(2020, 1, 2), 7, 52, 38],
    [new Date(2020, 1, 3), 7, 45, 53],
    [new Date(2020, 1, 4), 5, 49, 65],
    [new Date(2020, 1, 5), 8, 55, 57],
    [new Date(2020, 1, 6), 12, 75, 42],
    [new Date(2020, 1, 7), 11, 80, 47],
    [new Date(2020, 1, 8), 13, 63, 50]
];

// create iterator class
const iterator = {
    index : 0,
    [Symbol.iterator]: () => {
        return {
            next: () => {
                // check condition
                if (iterator.index < weatherArray.length) {
                    // in triple function, cannot reach the variables in the parent 
                    iterator.index++;
                    return {
                        value : {
                            date : weatherArray[iterator.index - 1][0],
                            temparature : weatherArray[iterator.index - 1][1],
                            windSpeed: weatherArray[iterator.index - 1][2],
                            humidity : weatherArray[iterator.index - 1][3]
                        },
                        done : false
                    };
                }
                // end of array
                else return {done : true};
            }
        };
    }
};

/* for (const item of iterator) {
    // console.log(item.date instanceof Date);
    // use backstick (`) instead of single quote (')
    console.log(`date:${item.date}, temperature:${item.temperature}, windspeed:${item.windspeed}, humidity:${item.humidity}`);
}  */

/* let selArray = [[], [], [], []];
// !!!ATTENTION: for ... OF ...
for (const item of iterator) {
    if (checkSum(item.date, new Date(2020, 1, 5))) {
        selArray[0].push(item.date);
        selArray[1].push(item.temparature);
        selArray[2].push(item.windSpeed);
        selArray[3].push(item.humidity);
    }
}
 */


// task 3
var calcMittelwert = (items) => {
    let sum = 0.0;
    for (let i in items) {
        sum += Number.parseFloat(items[i]);
    }
    return (sum / items.length);
};

var subTemparatureSet = [];
var subWindSpeedSet = [];
var subHumiditySet = [];
for (const elem of iterator) {
    if (checkSum(new Date(2020, 1, 3), elem.date) && checkSum(elem.date, new Date(2020, 1, 7))) {
        subTemparatureSet.push(elem.temparature);
        subWindSpeedSet.push(elem.windSpeed);
        subHumiditySet.push(elem.humidity);
    }
}
console.log("Middelvalue temparature: " + calcMittelwert(subTemparatureSet));
console.log("Middelvalue windspeed: " + calcMittelwert(subWindSpeedSet));
console.log(`Middelvalue humidity: ${calcMittelwert(subHumiditySet)}`);



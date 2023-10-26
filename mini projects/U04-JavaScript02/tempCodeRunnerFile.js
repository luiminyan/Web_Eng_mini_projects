let selArray = [[], [], [], []];
// !!!ATTENTION: for ... OF ...
for (const item of iterator) {
    if (checkSum(item.date, new Date(2020, 1, 5))) {
        selArray[0].push(item.date);
        selArray[1].push(item.temparature);
        selArray[2].push(item.windSpeed);
        selArray[3].push(item.humidity);
    }
}

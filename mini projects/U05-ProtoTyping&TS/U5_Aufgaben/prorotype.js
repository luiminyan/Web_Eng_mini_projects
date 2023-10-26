var Gegenstand = {
    bezeichner : null,
    gewicht : null,
    // 在object里创建function，使用匿名function
    getBeschreibung : function() {
        console.log(this.bezeichner);

    },
    getGewicht : function() {
        // this代表上一级
        console.log(this.gewicht + 'g');
    }
}

// 创建子类: Object.create(/* classs type */)
var Kugel = Object.create(Gegenstand);
// not a problem in ES6, but in ES5 need to be declaired
Kugel.radius = null;
Kugel.getBeschreibung = function() {
    console.log(this.bezeichner);
    console.log('Oberfläche = ' + 4 * Math.PI * Math.pow(this.radius, 2));
}

var Quader = Object.create(Gegenstand);
Quader.seitenlange = null;
Quader.getBeschreibung = function() {
    console.log(this.bezeichner);
    console.log('Oberflaeche = ' + 6 * Math.pow(this.seitenlaengen, 2));
};

var eineKugel = Object.create(Kugel, {
    radius : {value : 2},
    bezeichner : {value : "KugelA"},
    gewicht : {value : 4}
});

var eineQuader = Object.create(Quader, {
    seitenlaengen : {value : 2},
    bezeichner : {value : "WuerfelA"},
    gewicht : {value : 5}
});

eineKugel.getBeschreibung();
eineKugel.getGewicht();

eineQuader.getBeschreibung();
eineQuader.getGewicht();



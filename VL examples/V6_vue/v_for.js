var vm = new Vue({
    el: "#app",
    data: {
        // items list to iterate
        items: [{message:"Vorlesung01"},{message:"Vorlesung02"}],

        // object to rendering / iterate
        object01: {name: "Lisa Simpson", age: "5", hometown: "Springfield"},

        // objectList
        objectList: [{name: "Lisa Simpson", age: 5}, {name: "Milan Popo", age: 51}, {name: "Puppi Popo", age: 25}]
    },
    methods:{}
});
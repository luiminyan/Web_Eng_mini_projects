// create global vue component
Vue.component("btn-counter", {
    // .data: muss define a func. (like a constructor)
    data: function() {
        return {
            // capsule the attributes of .data
            counter: 0
        }
    },
    methods: {
        count: function(){this.counter++;}
    },
    // define the content of the <b...></b...> in html file
    template: '<button v-on:click="count"> Der Knopf wurde {{ counter }} mal gedrückt. </button>'
});

// vue实例应该放在component后面
var vm = new Vue({
    el: "#app"
});
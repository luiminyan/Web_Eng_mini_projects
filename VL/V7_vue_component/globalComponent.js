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

Vue.component("component-a", {
    data: function(){
        return{
            // should return an object
            item: 0
        }
    },
    // create vue component in another vue component's template
    template: '<btn-counter></btn-counter>'
});

// vue实例应该放在component后面
var vm = new Vue({
    el: "#app"
});
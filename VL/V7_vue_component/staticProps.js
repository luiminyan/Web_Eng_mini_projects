// static props
// create one dom element by global component
Vue.component("component-a", {
    props:["title"],
    template: "<h1>{{title}}</h1>"
});

// create many dom element
Vue.component("component-b", {
    props:["title", "date", "content"],
    template: '<div class="component-b"> <h1>{{title}}</h1> <p>{{date}}</p> <p>{{content}}</p></div>'
});

// root instance
var vm = new Vue({
    el: "#app"
});
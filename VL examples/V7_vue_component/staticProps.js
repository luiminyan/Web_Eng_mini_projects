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

// use v-bind: <prop item>
Vue.component("component-c", {
    props:{
        content: String
    },
    template: "<p>{{content}}</p>"
});

// v-bind, boolean
Vue.component("component-d", {
    props: {
        // use lower key
        isbool: Boolean
    },
    template: "<p> isBool is {{isbool}} </p>"
});

// 传入其他类型
Vue.component("component-others", {
    props: {
        //数字
        likes: Number,
        // 数组
        commentids: Array,
        // 对象
        person: Object
    },
    template: '<p>Likes: {{likes}}, Comment ids: {{commentids}}, person: {{person}}</p>'
});



// root instance
var vm = new Vue({
    el: "#app"
});
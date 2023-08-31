Vue.component("component-a", {
    props:["title", "date", "content"],
    template: 
        `<div>
            <h1>{{title}}</h1>
            <p>{{date}}</p>
            <p>{{content}}</p>
        </div>`
});

// object link
Vue.component("component-b", {
    // 不要忘记添加引号！！！！
    props: ["prop-data"],
    template:
        `<div> 
            <h1>{{propData.title}}</h1>
            <p>{{propData.date}}</p>
            <p>{{propData.content}}</p>
        </div>`
});

var vm = new Vue({
    el: "#app",
    data: {
        propData:{
            title: "Hello World",
            date: "06.07.2020",
            content: "Lorem Ipsum"
        }
    }
});
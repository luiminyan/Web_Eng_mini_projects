Vue.component("component-a", {
    template:`<p>The text of the component-a tag</p>`,
    emits:['enlargeText']
});

// root instance
var vm = new Vue({
    el: "#app",
    data:{
        propFontSize: 1
    }
});
var vm = new Vue({
    // el: "#app",
    data:{
        count: 0,
        message: "Vorlesung Web-Engineering",
        message2: ""
    },
    methods:{
        add: function(){this.count++;}
        // 在methods里不能使用arrow func，因为this不指vue常量
    }

});

// testing messages attributes in data
console.log(vm.message);
vm.message2 = "Hallo Welt";

// testing add() in methods
vm.add();
console.log(vm.count);

// vue.js instance (official defined) attributes and functions
// return .data
console.log(vm.$data);
// return the DOM element 
// console.log(vm.$el);

// .$mount():绑定DOM元素
vm.$mount('#app')

// 监听count
vm.$watch('count', (newValue, oldValue) => {console.log(`Counter value changed from ${oldValue} to ${newValue}`);});
// 更改count的值，查看consolo是否增加一条信息
vm.add();


// conditional rendering: v-if, v-else-if, v-else



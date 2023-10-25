// ClearTodosButton
Vue.component("clear-todos-button", {});

// Child: TodoListStatistics
Vue.component("todo-list-statistics", {
    // 从父组件接收
    inject: ['user'],
    created() {
        console.log(`Injected property: ${this.user}`);
    },
    // component必须要定义template
    template:`<p>{{this.user}}</p>`
});

// TodoItem
Vue.component("todo-item", {});

// TodoListFooter
Vue.component("todo-list-footer", {});

// Parent: TodoList
Vue.component("todo-list", {
    data() {
        return {
            todos: ['Feed a cat', 'Buy tickets']
        }
    },
    // 提供给子组件
    provide:{
        user:'John Doe'
    }
});

// root instance
var vm = new Vue({
    el: "#app",
    // 提供给子组件: root instance是所有global component的根
    provide:{
        user:'John Doe'
    }
});
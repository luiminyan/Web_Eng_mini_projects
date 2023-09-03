var mainToDoList = {
    data: function(){
        return{
            isFinished:false
        }
    },
    methods:{
        deleteToDoItem: function(){
            this.isFinished = false;
            this.$emit("delete-todo", this.item);
        }
    },
    // take 
    props:["item"],
    template:
        `<div>
            <table class="todo-list" v-bind:class="{finished:isFinished}">
                <tr><th>{{item.title}}</th></tr>
                <tr><th>Content</th><td>{{item.content}}</td></tr>
                <tr><th>Deadline</th><td>{{item.deadline}}<br><input type="checkbox" v-model="isFinished"><label>Finished</label></td></tr>
            </table>
            <button v-on:click="deleteToDoItem">delete</button>
        </div>`
};

// receive the new toDoItem fron user-interface
var toDoListController = {
    data: function(){
        return{
            newToDoItem: {
                id:0,
                title:"",
                content:"",
                deadline:""
            }
        }
    },
    template:
    `<div class="toDoController">
        <table>
            <tr>
                <th>Title</th>
                <td><input type="text" v-model="newToDoItem.title"></td>
            </tr>
            <tr>
                <th>Content</th>
                <td><textarea v-model="newToDoItem.content"></textarea></td>
            </tr>
            <tr>
                <th>Deadline</th>
                <td><input type="text" v-model="newToDoItem.deadline"></td>
            </tr>
        </table>
        <button v-on:click="$emit('add-to-do-item', newToDoItem)">Add to-do item</button>
    </div>`
};

var vm = new Vue({
    el:"#app",
    data: {
        toDoItems:[{id:0, title:"First item", content:"none", deadline:"none"}],
        idCounter:0
    },
    methods:{
        addToDoItem: function(item){
            this.idCounter++;
            let newToDoItem = {
                id: this.idCounter,
                title: item.title,
                content: item.content,
                deadline: item.deadline
            };
            this.toDoItems.push(newToDoItem);
        },
        deleteToDoItem: function(item){
            for (index in this.toDoItems) {
                if (this.toDoItems[index].id == item.id) {
                    this.toDoItems.splice(index, 1);
                }
            }
        }
    },
    components: {
        "to-do-list-contoller": toDoListController,
        "main-to-do-list": mainToDoList
    }
});
/* 
 * this example is a simple MVVM (Model-View-ViewModel structure) example
 * Model: as an example: the data structure of the root instatnce
 * ModelView: use a 'middleware' component: to iterate over the data structure in 'model' and create the child component in view
 * View: user-interface, child-component takes over the user-input(v-model), and send to ViewModel
 */

var userInputEntry = {
    // local attribute to store user-input temporaly
    data: function(){
        return{
            // return userInput object
            userInput: {
                userName:"",
                content:""
            }
        }
    },
    // create user-input template
    // the button: click event avoak the user-defined "add-user-input" event, using the 'userInput' as parameter
    // !!!!!! v-model="<objectName>.attribute"
    template:
        `<div class="userInputEntry" style="border: solid 5px pink; padding: 10px;">
            <table>
                <tr>
                    <td><input v-model="userInput.userName" type="text"></td>
                </tr>
                <tr>
                    <td><textarea v-model="userInput.content"></textarea></td>
                </tr>
            </table>
            <button v-on:click="$emit('add-user-input', userInput)">Submit</button>
        </div>`
};

var userInputSection = {
    // use the kebab-format
    props:["user-input"],
    template:
        `<div class="userInputSection">
            <table>
                <tr>
                    <th>User-ID</th>
                    <td>{{userInput.id}}</td>
                </tr>
                <tr>
                    <th>User name</th>
                    <td>{{userInput.userName}}</td>
                </tr>
                <tr>
                    <th>Content</th>
                    <td>{{userInput.content}}</td>
                </tr>
            </table>
        </div>`
};


// create root instance
var vue = new Vue({
    // connect with DOM element
    el:"#app",
    data: {
        userInputList:[{id: 0, userName:"Lisa Simpson", content:"The first user input"}],
        userInputCount: 0
    },
    methods:{
        // userInput is the parameter from userInputEntry component
        addUserInput: function(userInput){
            this.userInputCount++;
            // create local userInput instance
            let userInputInst = {
                // !!!!! THIS. 
                id: this.userInputCount,
                userName: userInput.userName,
                content: userInput.content
            }
            //!!!!!! THIS.
            this.userInputList.push(userInputInst);
        }
    },
    // register the static components
    components: {
        "create-user-input": userInputEntry,
        "my-user-input":userInputSection
    }
});
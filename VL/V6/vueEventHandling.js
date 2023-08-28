var vm = new Vue({
    el:"#app",
    data:{
        counter: 0,
        randomNum: 0,
        context: "",
        // v-on:[event],event必须是string
        event: "click",
        name: "Lisa",
    },
    methods:{
        rndNumber: function(){
            this.randomNum = Math.floor(Math.random()*100);
        },

        changeContext: function() {
            this.context = "Context is now changed.";
        },

        callByName: function() {
            this.name += " Baby ";
        }

    }
});
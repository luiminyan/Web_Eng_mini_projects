var vue = new Vue({
    el:'#app',
    data:{
        cryptoMenge: 0,
        cryptoModifikator: 1,
        infoText:"",
        updateList:[{name:'Bot miner', times: 0}, {name:'RTX 3090', times: 0}, {name:'Netzwerk', times: 0}, {name:'Serverraum', times: 0},],
        isShown: false,
        darkModeActive: false
    },
    methods:{
        addCrypto: function(){
            // 错误： root里面的函数不要忘记加上this.
            this.cryptoMenge += this.cryptoModifikator;
        },
        checkSum: function(upgrade, price, increase, position){
            if (this.cryptoMenge - price <= 0){
                this.infoText = "Not enough crypto coins!"
            }
            else {
                this.cryptoMenge -= price;
                this.cryptoModifikator += increase;
                this.updateList[position].times += 1;
                this.infoText = upgrade + ' is booked!';
            }
        },
        increaseModifier: function(upgrade){
            switch(upgrade){
                case "botminer":
                    this.checkSum("Bot Miner", 10, 5, 0);
                    //  错误：需要写return
                    return;
                case "rtx3090":
                    this.checkSum("RTX 3090", 50, 10, 1);
                    return;
                case "netzwerk":
                    this.checkSum("Netzwerk", 100, 50, 2);
                    return;
                case "serverraum":
                    this.checkSum("Serverraum", 500, 100, 3);
                    return;
                default:
                    console.log("Error: no upgrad chosen!");
                    return;
            }
        },
        showOptions: function(){
            this.isShown = !this.isShown;
        },
        toggelMode: function(){
            this.darkModeActive = !this.darkModeActive;
        }
    }
});
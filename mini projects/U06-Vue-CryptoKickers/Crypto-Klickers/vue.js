var vm = new Vue({
    el: "#app",
    data: {
        cryptoMenge: 0,
        cryptoModifikator: 1,
        infoText: "",
        cryptoCost: {botminer: 10, rtx3090: 50, botnetzwerk: 100, serverraum: 500},
        updateList: [{name: "Bot Miner", number: 0}, {name: "RTX3090", number: 0}, {name: "Bot Netzwerk", number: 0}, {name: "Serverraum", number: 0}],
        // if page in darkmode
        isDarkmode: false,
        isOption: false
    },
    methods: {
        addCryptoCoins: function() {
            this.cryptoMenge += 1 * this.cryptoModifikator;
        },
        incCryproModifikator: function(code) {
            switch(code){
                case "botminer":
                    // 添加this关键字
                    if (this.checkCryptoAmount(this.cryptoCost.botminer)) {
                        this.cryptoMenge -= this.cryptoCost.botminer;
                        // update in updateList
                        this.updateList[0].number += 1;
                        this.infoText = "Bot Miner gekauft!";
                        this.cryptoModifikator += 1;
                        return;
                    }
                    // not enough of coins
                    this.infoText = "Zu wenig Crypto Coins für Bot Miner!";
                    return;
                case "rtx3090":
                    if (this.checkCryptoAmount(this.cryptoCost.rtx3090)) {
                        this.cryptoMenge -= this.cryptoCost.rtx3090;
                        // update in updateList
                        this.updateList[1].number += 1;
                        this.infoText = "RTX3090 gekauft!";
                        this.cryptoModifikator += 5;
                        return;
                    }
                    this.infoText = "Zu wenig Crypto Coins für RTX3090!";
                    return;
                case "botnetzwerk":
                    if (this.checkCryptoAmount(this.cryptoCost.botnetzwerk)) {
                        this.cryptoMenge -= this.cryptoCost.botnetzwerk;
                        // update in updateList
                        this.updateList[2].number += 1;
                        this.infoText = "Bot Netzwerk gekauft!";
                        this.cryptoModifikator += 10;
                        return;
                    }
                    this.infoText = "Zu wenig Crypto Coins für Bot Netzwerk!";
                    return;
                case "serverraum":
                    if (this.checkCryptoAmount(this.cryptoCost.serverraum)) {
                        this.cryptoMenge -= this.cryptoCost.serverraum;
                        // update in updateList
                        this.updateList[3].number += 1;
                        this.infoText = "Server Raum gekauft!";
                        this.cryptoModifikator += 50;
                        return;
                    }
                    this.infoText = "Zu wenig Crypto Coins für Server Raum!";
                    return;
                default:
                    alert("Something went wrong");
                    return;
            }
        },
        // helper function to check enough crypto-coins to book the new technique
        checkCryptoAmount: function(cost) {
            if (cost <= this.cryptoMenge) {
                return true;
            }
            else return false;
        },

        // click function for option button
        clickOptionen: function() {
            // shown / true
            if (this.isOption) {
                this.isOption = false;
            }
            // unshown / false
            else this.isOption = true;
        },

        // change between dark and light mode
        toggelDarkMode: function() {
            if (this.isDarkmode) {
                this.isDarkmode = false;
            }
            else this.isDarkmode = true;
        }

    }
});
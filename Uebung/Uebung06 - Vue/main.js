var vm = new Vue({
	el:"#app",
	data: {
		cryptoMenge: 0,
		cryptoModifikator: 1
	},
	methods:{
		addCrypto: function(){
			this.cryptoMenge += 1 * this.cryptoModifikator;
		},
		increaseModifier: function(code){
			switch(code){
				case "botminer":
					this.cryptoModifikator += 1;
					return;
				case "rtx3090":
					this.cryptoModifikator += 5;
					return;
				case "netzwerk":
					this.cryptoModifikator += 10;
					return;
				case "serverraum":
					this.cryptoModifikator += 50;
					return;
				default:
					alert("Something went wrong");
					return;
			}
		}
	}
});

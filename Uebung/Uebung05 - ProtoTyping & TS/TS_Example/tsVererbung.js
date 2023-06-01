//typescript: declare class
var Client = /** @class */ (function () {
    function Client(n) {
        this.name = n;
    }
    Client.prototype.getName = function () {
        return this.name;
    };
    return Client;
}());
var alice = new Client("Alice");
console.log(alice.getName());

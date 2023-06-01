var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Obj = /** @class */ (function () {
    //constructor
    function Obj(name, weight) {
        this.name = name;
        this.weight = weight;
    }
    //functions
    Obj.prototype.getDescription = function () {
        console.log(this.name);
    };
    Obj.prototype.getWeight = function () {
        console.log(this.weight + ' g');
    };
    return Obj;
}());
var Ball = /** @class */ (function (_super) {
    __extends(Ball, _super);
    //constructor
    function Ball(name, weight, radius) {
        var _this = 
        //call parent class constructor
        _super.call(this, name, weight) || this;
        _this.radius = radius;
        return _this;
    }
    //overwrite getDescription
    Ball.prototype.getDescription = function () {
        console.log(this.name + ' has surface ' + 4 * Math.PI * Math.pow(this.radius, 2));
    };
    return Ball;
}(Obj));
var Dice = /** @class */ (function (_super) {
    __extends(Dice, _super);
    //constructor
    function Dice(name, weight, sideLength) {
        var _this = 
        //call parent class constructor
        _super.call(this, name, weight) || this;
        _this.sideLength = sideLength;
        return _this;
    }
    //overwrite getDescription
    Dice.prototype.getDescription = function () {
        console.log(this.name + ' has surface ' + 6 * Math.pow(this.sideLength, 2));
    };
    return Dice;
}(Obj));
//create instances
var dice01 = new Dice('d01', 20, 5);
dice01.getWeight();
dice01.getDescription();
var ball01 = new Ball('b01', 10, 1);
ball01.getWeight();
ball01.getDescription();

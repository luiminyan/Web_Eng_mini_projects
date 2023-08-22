"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var Gegenstand = /** @class */ (function () {
    // constructor
    function Gegenstand(bezeichner, gewicht) {
        this.bezeichner = bezeichner;
        this.gewicht = gewicht;
    }
    // getters & setters
    Gegenstand.prototype.getBezeichner = function () {
        return this.bezeichner;
    };
    Gegenstand.prototype.setBezeichner = function (bezeichner) {
        this.bezeichner = bezeichner;
    };
    Gegenstand.prototype.getGewicht = function () {
        return this.gewicht;
    };
    Gegenstand.prototype.setGewicht = function (gewicht) {
        this.gewicht = this.gewicht;
    };
    Gegenstand.prototype.printInfo = function () {
        console.log("Bezeichner: ".concat(this.bezeichner, ", Gewicht: ").concat(this.gewicht));
    };
    return Gegenstand;
}());
var Kugel = /** @class */ (function (_super) {
    __extends(Kugel, _super);
    // constructor
    function Kugel(bezeichner, gewicht, radius) {
        var _this = 
        // call parent class constructor
        _super.call(this, bezeichner, gewicht) || this;
        _this.radius = radius;
        return _this;
    }
    Kugel.prototype.getRadius = function () {
        return this.radius;
    };
    Kugel.prototype.setRadius = function (radius) {
        this.radius = this.radius;
    };
    Kugel.prototype.printInfo = function () {
        console.log("Bezeichner: ".concat(this.bezeichner, ", Gewicht: ").concat(this.gewicht, ", Radius: ").concat(this.radius));
    };
    return Kugel;
}(Gegenstand));
var Wuerfel = /** @class */ (function (_super) {
    __extends(Wuerfel, _super);
    // constructor
    function Wuerfel(bezeichner, gewicht, seitenlaege) {
        var _this = 
        // call parent class constructor
        _super.call(this, bezeichner, gewicht) || this;
        _this.seitenlaege = seitenlaege;
        return _this;
    }
    Wuerfel.prototype.getSeitenlaege = function () {
        return this.seitenlaege;
    };
    Wuerfel.prototype.setSeitenlaege = function (seitenlaege) {
        this.seitenlaege = this.seitenlaege;
    };
    Wuerfel.prototype.printInfo = function () {
        console.log("Bezeichner: ".concat(this.bezeichner, ", Gewicht: ").concat(this.gewicht, ", Radius: ").concat(this.seitenlaege));
    };
    return Wuerfel;
}(Gegenstand));
var kugel01 = new Kugel('kugel01', 10, 5);
kugel01.printInfo();
var wuerfel01 = new Wuerfel('wuerfel01', 20, 1);
wuerfel01.printInfo();

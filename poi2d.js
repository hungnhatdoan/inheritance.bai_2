"use strict";
exports.__esModule = true;
exports.Poi2d = void 0;
var Poi2d = /** @class */ (function () {
    function Poi2d(x, y) {
        this.x = x;
        this.y = y;
    }
    Poi2d.prototype.getX = function () {
        return this.x;
    };
    Poi2d.prototype.getY = function () {
        return this.y;
    };
    Poi2d.prototype.setX = function (x) {
        this.x = x;
    };
    Poi2d.prototype.setY = function (y) {
        this.y = y;
    };
    Poi2d.prototype.getXY = function () {
        return {
            x: this.x,
            y: this.y
        };
    };
    return Poi2d;
}());
exports.Poi2d = Poi2d;

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
exports.__esModule = true;
exports.Poi3d = void 0;
var poi2d_1 = require("./poi2d");
var Poi3d = /** @class */ (function (_super) {
    __extends(Poi3d, _super);
    function Poi3d(x, y, z) {
        var _this = _super.call(this, x, y) || this;
        _this.z = z;
        return _this;
    }
    Poi3d.prototype.getZ = function () {
        return this.z;
    };
    Poi3d.prototype.setZ = function (z) {
        this.z = z;
    };
    Poi3d.prototype.getXYZ = function () {
        return {
            x: _super.prototype.getX.call(this),
            y: _super.prototype.getY.call(this),
            z: this.z
        };
    };
    return Poi3d;
}(poi2d_1.Poi2d));
exports.Poi3d = Poi3d;

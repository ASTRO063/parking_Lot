"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParkingLot = void 0;
var ParkingLot = /** @class */ (function () {
    function ParkingLot(slots, vechiles) {
        if (vechiles === void 0) { vechiles = []; }
        this.parking_slots = 6;
        this.parked_vehicles = [];
        this.parking_slots = slots;
        this.parked_vehicles = vechiles;
        console.log("Created a parking lot with " + this.parking_slots + " slots");
    }
    ParkingLot.prototype.get_available_slot = function () {
        var e_1, _a;
        var len = __spreadArray([], __read(this.parked_vehicles)).length;
        if (len >= 0 && len < this.parking_slots) {
            return len + 1;
        }
        try {
            for (var _b = __values(this.parked_vehicles.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), i = _d[0], car = _d[1];
                if (!car) {
                    return i + 1;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return -1;
    };
    return ParkingLot;
}());
exports.ParkingLot = ParkingLot;

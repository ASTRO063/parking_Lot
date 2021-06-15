"use strict";
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
    return ParkingLot;
}());
exports.ParkingLot = ParkingLot;

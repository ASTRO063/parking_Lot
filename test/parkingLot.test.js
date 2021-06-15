const { Car } = require("../src/car");
const { ParkingLot } = require("../src/parkingLot");

let car1 = [];
let parking_slots;
let parking_lot;
beforeEach(() => {
  car1 = [new Car("KA-01-HH-1234", "White"), new Car("KA-01-HH-9999", "White")];
  parking_slots = 3;
  parking_lot = new ParkingLot(parking_slots, car1);
});

test("contructor creates 3 parking slots ", () => {
  expect(parking_lot.parking_slots).toBe(3);
});

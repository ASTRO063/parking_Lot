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

test("gives the available slot number slot, 3", () => {
  expect(parking_lot.get_available_slot()).toBe(3);
});

test("return -1 if there are no available slot number", () => {
  parking_lot.parked_vehicles.push(new Car("KA-01-HH-9999", "White"));
  expect(parking_lot.get_available_slot()).toBe(-1);
});

test("after parking at availabe slot the parked vechiles are 3", () => {
  parking_lot.park(new Car("KA-01-HH-9999", "White"), 3);
  expect(parking_lot.parked_vehicles.length).toBe(3);
});
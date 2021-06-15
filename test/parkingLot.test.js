const { Car } = require("../src/car");
const { ParkingLot } = require("../src/parkingLot");

let cars = [];
let parking_slots;
let parking_lot;

beforeEach(() => {
  cars = [new Car("KA-01-HH-1234", "White"), new Car("KA-01-HH-9999", "White")];
  parking_slots = 3;
  parking_lot = new ParkingLot(parking_slots, cars);
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

describe("relation between leave and avaliable slot", () => {
  beforeEach(() => {
    cars = [
      new Car("KA-01-HH-1234", "White"),
      new Car("KA-01-HH-9999", "White"),
      new Car("KA-01-HH-1314", "Black"),
    ];
    parking_slots = 3;
    parking_lot = new ParkingLot(parking_slots, cars);
  });

  test("after leaving, the slot is availabe for parking ", () => {
    parking_lot.leave(2);
    expect(parking_lot.get_available_slot()).toBe(2);
  });

  test("after leaving, the first empty slot is availabe for parking ", () => {
    parking_lot.leave(3);
    parking_lot.leave(2);
    expect(parking_lot.get_available_slot()).toBe(2);
  });
});

test("prints the parked slots along with vechiles properties", () => {
  parking_lot.leave(2);
  let expected = `Slot No. Registration No Colour\n1        KA-01-HH-1234   White`;
  expect(parking_lot.status()).toMatch(expected);
});

test("returns the registration numbers of cars parked , having WHITE color", () => {
  let expected = `KA-01-HH-1234, KA-01-HH-9999`;
  let recived = parking_lot.registration_numbers_for_cars_with_colour("White");
  expect(recived).toMatch(expected);
});

test("returns slot numbers of car with specific colour,here White", () => {
  let expected = `1, 2`;
  let recived = parking_lot.slot_numbers_for_cars_with_colour("White");
  expect(recived).toMatch(expected);
});
const { Car } = require("../src/car");
const { ParkingLot } = require("../src/parkingLot");

let cars = [];
let parkingSlots;
let parkingLot;

beforeEach(() => {
  cars = [new Car("KA-01-HH-1234", "White"), new Car("KA-01-HH-9999", "White")];
  parkingSlots = 3;
  parkingLot = new ParkingLot(parkingSlots, cars);
});

test("contructor creates 3 parking slots ", () => {
  expect(parkingLot.parkingSlots).toBe(3);
});

test("gives the available slot number slot, 3", () => {
  expect(parkingLot.getAvailableSlots()).toBe(3);
});

test("return -1 if there are no available slot number", () => {
  parkingLot.parkedVehicles.push(new Car("KA-01-HH-9999", "White"));
  expect(parkingLot.getAvailableSlots()).toBe(-1);
});

test("after parking at availabe slot the parked vechiles are 3", () => {
  parkingLot.park(new Car("KA-01-HH-9999", "White"), 3);
  expect(parkingLot.parkedVehicles.length).toBe(3);
});

describe("relation between leave and avaliable slot", () => {
  beforeEach(() => {
    cars = [
      new Car("KA-01-HH-1234", "White"),
      new Car("KA-01-HH-9999", "White"),
      new Car("KA-01-HH-1314", "Black"),
    ];
    parkingSlots = 3;
    parkingLot = new ParkingLot(parkingSlots, cars);
  });

  test("after leaving, the slot is availabe for parking ", () => {
    parkingLot.leave(2);
    expect(parkingLot.getAvailableSlots()).toBe(2);
  });

  test("after leaving, the first empty slot is availabe for parking ", () => {
    parkingLot.leave(3);
    parkingLot.leave(2);
    console.log(parkingLot);
    expect(parkingLot.getAvailableSlots()).toBe(2);
  });
});

test("prints the parked slots along with vechiles properties", () => {
  parkingLot.leave(2);
  let expected = `Slot No. Registration No Colour\n1        KA-01-HH-1234   White`;
  expect(parkingLot.status()).toMatch(expected);
});

test("returns the registration numbers of cars parked , having WHITE color", () => {
  let expected = `KA-01-HH-1234, KA-01-HH-9999`;
  let recived = parkingLot.registrationNumbersOfCarWithColour("White");
  expect(recived).toMatch(expected);
});

test("returns slot numbers of car with specific colour,here White", () => {
  let expected = `1, 2`;
  let recived = parkingLot.slotNumbersForCarsWithColour("White");
  expect(recived).toMatch(expected);
});

test("returns the slot number of parked vechile,if parked", () => {
  let expected = 2;
  let recived = parkingLot.slotNumberForRegistrationNumber("KA-01-HH-9999");
  expect(recived).toBe(expected);
});

test("returns 'Not found', if a vechile with registration number is not parked", () => {
  let expected = "Not found";
  let recived = parkingLot.slotNumberForRegistrationNumber("KA-01-HH-900");
  expect(recived).toMatch(expected);
});

const { test, expect } = require("@jest/globals");
const { Car } = require("../src/car");

test("creates car object with registration_number and colour", () => {
  const car = new Car("KA-01-HH-1234", "White");
  const expected = {
    registration_Number: "KA-01-HH-1234",
    colour: "White",
  };
  expect(car).toMatchObject(expected);
});

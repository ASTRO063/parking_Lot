const { test, expect } = require("@jest/globals");
const sum = require("../src/sum");

test("adding 1 + 2 to get 3", () => {
  expect(sum(1, 2)).toBe(3);
});

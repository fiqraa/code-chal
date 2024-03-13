// sumOfEvens.test.js
const sumOfEvens = require("../../sumOfEven/sumOfEven.js");

describe("sumOfEvens", () => {
  test("should return the sum of even numbers in the array", () => {
    expect(sumOfEvens([1, 2, 3, 4, 5])).toEqual(6);
    expect(sumOfEvens([2, 4, 6, 8])).toEqual(20);
    expect(sumOfEvens([1, 3, 5, 7])).toEqual(0);
  });

  test("should return 0 if no even numbers are present", () => {
    expect(sumOfEvens([1, 3, 5, 7])).toEqual(0);
  });

  test("should return 0 for an empty array", () => {
    expect(sumOfEvens([])).toEqual(0);
  });
});

// sumOfSquares.test.js
const sumOfSquares = require("../../sumOfSquares/sumSquares.js");

describe("sumOfSquares", () => {
  test("should return the sum of squares for two numbers", () => {
    expect(sumOfSquares(3, 4)).toEqual(25);
    expect(sumOfSquares(5, 2)).toEqual(29);
    expect(sumOfSquares(0, 1)).toEqual(1);
  });

  test("should return 0 if both numbers are 0", () => {
    expect(sumOfSquares(0, 0)).toEqual(0);
  });

  test("should return the square of the non-zero number if one number is 0", () => {
    expect(sumOfSquares(3, 0)).toEqual(9);
    expect(sumOfSquares(4, 0)).toEqual(16);
  });
});

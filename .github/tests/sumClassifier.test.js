// sumClassifier.test.js
const sumClassifier = require("../../sumClassifier/sumClassifier.js");

describe("sumClassifier", () => {
  test("should classify the sum of numbers as Large, Equal, or Small", () => {
    expect(sumClassifier([3, 5, 2])).toEqual("Equal Sum");
    expect(sumClassifier([1, 4, 5])).toEqual("Equal Sum");
    expect(sumClassifier([2, 2, 1])).toEqual("Small Sum");
  });

  test('should return "Large Sum" for a sum greater than 10', () => {
    expect(sumClassifier([5, 6])).toEqual("Large Sum");
    expect(sumClassifier([10, 1])).toEqual("Large Sum");
  });

  test('should return "Equal Sum" for a sum equal to 10', () => {
    expect(sumClassifier([5, 5])).toEqual("Equal Sum");
    expect(sumClassifier([3, 7])).toEqual("Equal Sum");
  });

  test('should return "Small Sum" for a sum less than 10', () => {
    expect(sumClassifier([2, 3])).toEqual("Small Sum");
    expect(sumClassifier([1, 1, 1, 1, 1, 1, 1, 1])).toEqual("Small Sum");
  });
});

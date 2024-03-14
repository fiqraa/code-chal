// filterWords.test.js
const filterWords = require("../../filterWords/filterWords.js");

describe("filterWords", () => {
  test("should filter words with more than 3 characters", () => {
    expect(filterWords(["apple", "banana", "kiwi", "orange"])).toEqual([
      "apple",
      "banana",
      "kiwi",
      "orange",
    ]);
    expect(filterWords(["cat", "dog", "bat"])).toEqual([]);
    expect(filterWords(["elephant", "giraffe", "lion"])).toEqual([
      "elephant",
      "giraffe",
      "lion",
    ]);
  });

  test("should return an empty array if input array is empty", () => {
    expect(filterWords([])).toEqual([]);
  });

  test("should return an empty array if no words have more than 3 characters", () => {
    expect(filterWords(["a", "bb", "ccc"])).toEqual([]);
  });
});

import { sortArrayObjects } from "./sort";

describe("Sorting", () => {
  const object = {
    a: {
      timestamp: 1467166872634,
      author: "tetris",
      voteScore: 6
    },
    b: {
      timestamp: 1468479767190,
      author: "zed",
      voteScore: -5
    },
    c: {
      timestamp: 1552420198173,
      author: "alfa",
      voteScore: 1
    }
  };
  const array = ["a", "b", "c"];

  it("should order data by timestamp, from newer to older", () => {
    const ordered = sortArrayObjects(array, object, "timestamp");

    expect(ordered).toEqual(["c", "b", "a"]);
  });

  it("should order data by score, from higher to lower", () => {
    const ordered = sortArrayObjects(array, object, "voteScore");

    expect(ordered).toEqual(["a", "c", "b"]);
  });

  it("should order data by author name, alphabetically", () => {
    const ordered = sortArrayObjects(array, object, "author");

    expect(ordered).toEqual(["c", "a", "b"]);
  });
});

let bvn = require("./bvn");

describe("wait for server", () => {
  beforeEach(() => {
    jest.setTimeout(5000);
  });

  test("Valid BVN in request payload", () => {
    return bvn("7128217328").then((res) => {
      expect(res).toBe("happy");
    });
  });
});

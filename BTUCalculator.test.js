const btuTotal = require("./BTUCalculator");

test("should output min and max BTUS", () => {
    expect(btuTotal()).toBe("Your required BTUS is 5000-5500");
});
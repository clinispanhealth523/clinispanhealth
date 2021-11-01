import testMsg from "../src/msg.js";

describe("React Test", () => {
    it("Returns Test Msg", () => {
        expect(testMsg()).toBe("Hello World");
    });
});
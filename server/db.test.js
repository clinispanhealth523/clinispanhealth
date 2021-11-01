import testConnection from "./db.js";

describe('Connection', () => {
    it('Successfully Connects', () => {
        return testConnection().then((result) => {
            expect(result).toBe("Success");
        });
    });
});



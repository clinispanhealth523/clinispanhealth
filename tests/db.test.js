import testConnection from "../server/db.js";

describe('Connection', () => {
    it('Successfully Connects', () => {
        return testConnection().then((result) => {
            expect(result).toBe("Success");
        });
    });
});



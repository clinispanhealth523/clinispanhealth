import { createCon, testConnection } from "../server/db.js";

const USER = 'bd9f90002d4bf7'
const PW = 'b49b72fb'
const HOST = 'us-cdbr-east-04.cleardb.com'
const DB = 'heroku_2a1887659f30667'


describe('DB Management', () => {

    it('Successfully Connects', () => {
        return createCon(HOST,USER,PW,DB).then((con) => {
            return testConnection(con).then((result) => {
                expect(result).toBe("Success");
            });
        });
    });

    it('Establishes DB Successfully', () => {
    });

});




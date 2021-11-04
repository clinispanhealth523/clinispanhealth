import "core-js/stable";
import "regenerator-runtime/runtime";

import { 
    testCon,
    createSchema,
    deleteSchema,
    resetDB
 } from "../server/db.js";

describe('DB', () => {

    it('Connects to DB', async () => {
        expect(await testCon()).toBe("Success");
    });

    it('Deletes the Schema', async() => {
        expect(await deleteSchema()).toBe("Success");
    });

    it('Creates the Schema', async () => {
        expect(await createSchema()).toBe("Success");
    });

});



/*

describe('DB Management', () => {

    it('Connects to DB', () => {
        return createCon(HOST,USER,PW,DB).then((con) => {
            return testConnection(con).then((result) => {
                expect(result).toBe("Success");
            });
        });
    });

    it('Establishes DB Entities', () => {
        return createCon(HOST,USER,PW,DB).then((con) => {
            return createEntities(con).then((result) => {
                console.log(result);
                expect(result).toBe("Success");
            });
        });
    });

});


*/


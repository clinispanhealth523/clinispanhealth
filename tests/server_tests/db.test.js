import "core-js/stable";
import "regenerator-runtime/runtime";

import { 
    testCon,
    createSchema,
    deleteSchema,
    createPatient,
    getPatient,
    dictToString
 } from "../../server/db.js";

describe('DB Setup', () => {
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

describe('Patient Functions', () => {

    const patient = {
        email: "jdoe@gmail.com",
        password: "puppylover123",
        first: "John",
        last: "Doe",
        zipcode: 27514,
        phone: '19191234567',
    } 

    it('Converts the dict to SQL strings', async () => {
        const [fields, values] = dictToString(patient);
        expect(fields).toBe('email,password,first,last,zipcode,phone');
        expect(values).toBe(`'jdoe@gmail.com','puppylover123','John','Doe','27514','19191234567'`);
    });

    it('Creates a new patient', async () => {
        expect(await createPatient(patient)).toBe("Success");
    });

    it('Retrieves a patient by email', async () => {
        const result = await getPatient(patient.email);
        for (const [key, value] of Object.entries(patient)) {
            expect(result[key]).toBe(value);
        }
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


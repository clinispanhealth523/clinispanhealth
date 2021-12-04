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

 // For tests that need to run sequentially, place tests in different describe blocks
describe('DB Setup', () => {
    it('Connects to DB', async () => {
        expect(await testCon()).toBe("Success");
    });
});

describe('DB Schema Deletion', () => {
    it('Deletes the Schema', async() => {
        expect(await deleteSchema()).toBe("Success");
    });
});

describe('DB Schema Creation', () => {
    it('Creates the Schema', async() => {
        expect(await createSchema()).toBe("Success");
    });
});

describe('Patient Creation', () => {

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
});

describe('Patient Deletion', () => {
    const patient = {
        email: "jdoe@gmail.com",
        password: "puppylover123",
        first: "John",
        last: "Doe",
        zipcode: 27514,
        phone: '19191234567',
    } 

    it('Retrieves a patient by email', async () => {
        const result = await getPatient(patient.email);
        for (const [key, value] of Object.entries(patient)) {
            expect(result[key]).toBe(value);
        }
    });
});

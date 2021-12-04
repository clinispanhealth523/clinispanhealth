import { signUp } from '../../clinispanhealth-app/src/apis/signUpSubmit.js'
import "regenerator-runtime/runtime"

// For local test purposes, we will assume a local host
const host = 'http://localhost:3001';

describe('Overall Signup Tests', () => {
    let inputs = {
        first: "Joe",
        last: "Schmoe",
        email: "jschmoe123@gmail.com",
        pw: "puppylover123",
        pw2: "puppylover123",
        zipcode: "27514"
    }
    
    it('Accepts Normal Values', async () => {
        expect(await (async (inputs) => {
            try {
                return await signUp(inputs, host);
            } catch (error) {
                return error;
            }
        })(inputs)).toBe(inputs);
    });
});

describe('First and Last Name Tests', () => {

    let inputs = {
        first: "Joe",
        last: "Schmoe",
        email: "jschmoe123@gmail.com",
        pw: "puppylover123",
        pw2: "puppylover123",
        zipcode: "27514"
    }

    beforeEach(() => { 
        inputs.first = "Joe";
        inputs.last = "Schmoe";
    });

    it('Rejects a Blank First Name', async () => {
        inputs.first = '';
        expect(await (async (inputs) => {
            try {
                return await signUp(inputs, host);
            } catch (error) {
                return error;
            }
        })(inputs)).toBe("Please enter a first name");
    });

    it('Rejects an Illegal Name', async () => {
        expect(await (async (inputs) => {
            inputs.first = "Xae12";
            try {
                return await signUp(inputs, host);
            } catch (error) {
                return error;
            }
        })(inputs)).toBe("Please include only letters, dashes, and spaces in the first name");
    });

    it('Rejects a blank last name', async () => {
        expect(await (async (inputs) => {
            inputs.last = '';
            try {
                return await signUp(inputs, host);
            } catch (error) {
                return error;
            }
        })(inputs)).toBe('Please enter a last name');
    });

    it('Accepts a Name with Dashes and Spaces', async () => {
        expect(await (async (inputs) => {
            inputs.last = "Johnson-Smith Jr";
            try {
                return await signUp(inputs, host);
            } catch (error) {
                return error;
            }
        })(inputs)).toBe(inputs);
    });

});

describe('Email Tests', () => {
    let inputs = {
        first: "Joe",
        last: "Schmoe",
        email: "jschmoe123@gmail.com",
        pw: "puppylover123",
        pw2: "puppylover123",
        zipcode: "27514"
    }

    it('Rejects a blank email', async () => {
        inputs.email = "";
        expect(await (async (inputs) => {
            try {
                return await signUp(inputs, host);
            } catch (error) {
                return error;
            }
        })(inputs)).toBe('Please enter an email');
    });




});
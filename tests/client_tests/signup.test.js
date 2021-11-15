import { signUp } from '../../clinispanhealth-app/src/apis/signUpSubmit.js'


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

    it('Accepts a Normal First and Last Name', () => {
        expect(((inputs) => {
            try {
                return signUp(inputs);
            } catch (error) {
                return error;
            }
        })(inputs)).toBe(true);
    });

    it('Detects a Blank First Name', () => {
        inputs.first = "";
        expect(((inputs) => {
            try {
                return signUp(inputs);
            } catch (error) {
                return error;
            }
        })(inputs)).toBe("Please enter a first name");
    });

    it('Detects an Illegal Name', () => {
        expect(((inputs) => {
            inputs.first = "Xae12";
            try {
                return signUp(inputs);
            } catch (error) {
                return error;
            }
        })(inputs)).toBe("Please include only letters, dashes, and spaces in the first name");
    });

    

    it('Rejects a blank last name', () => {
        expect(((inputs) => {
            inputs.last = "";
            try {
                return signUp(inputs);
            } catch (error) {
                return error;
            }
        })(inputs)).toBe('Please enter a last name');
    });

    it('Accepts a Name with Dashes and Spaces', () => {
        expect(((inputs) => {
            inputs.last = "Johnson-Smith Jr";
            try {
                return signUp(inputs);
            } catch (error) {
                return error;
            }
        })(inputs)).toBe(true);
    });

});
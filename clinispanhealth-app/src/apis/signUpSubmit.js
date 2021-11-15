export function signUp(inputs) {

    // Test the first name
    testName(inputs.first, "first");
    testName(inputs.last, "last");
    return true;
}

// Test the first and last names
export function testName(tname, type) {
    if (tname === "") throw `Please enter a ${type} name`;
    if (! /^[a-zA-Z\s-]*$/.test(tname)) throw `Please include only letters, dashes, and spaces in the ${type} name`;
    return true;
}
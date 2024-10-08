/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    let toBe = (anotherVal) => { if(val === anotherVal) return true; else throw new Error("Not Equal")}
    let notToBe = (anotherVal) => { if(val !== anotherVal) return true; else throw new Error("Equal") }

    return {toBe, notToBe}
};
/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
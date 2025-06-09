const {checkIfPrimeNumber} = require('../primarity.js')

test("It generates prime numbers", ()=>{
    expect(checkIfPrimeNumber(20)).toEqual(false);
    expect(checkIfPrimeNumber(15)).toEqual(false);
    expect(checkIfPrimeNumber(11)).toEqual(true);

});
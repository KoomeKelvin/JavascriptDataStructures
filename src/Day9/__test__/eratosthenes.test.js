const {generatePrimeNumbers} = require('../eratosthenes.js')

test("It generates prime numbers", ()=>{
    const n = 30;
    expect(generatePrimeNumbers(n)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);

});
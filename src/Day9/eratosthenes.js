/**
 * eratosthenes - generates prime numbers up to n
 * 
 * @param {number} number to generate prime numbers up to
 * @returns {array} an array of prime numbers.
 */
function eratosthenes(n){
    let primeArray = Array.from({length:n+1}, (_, i)=> true);
    primeArray[0] = false;
    primeArray[1] = false;

    for(let i = 2; i*i <= n; i++){

        for(let j= i*i; j <= n; j += i){
            primeArray[j] = false;
        } 
    }

    finalPrimeArray = primeArray.reduce((accumulatedValue, value, i)=> {
        if (value && i >=2 ) accumulatedValue.push(i);
        return accumulatedValue;
    }, []);
    return finalPrimeArray;
}

/**
 * generatePrimeNumbers - generates prime numbers up to n
 * 
 * @param {number} number to generate prime numbers up to
 * @returns {array} an array of prime numbers.
 */
function generatePrimeNumbers(n){
    return eratosthenes(n);
}


module.exports = {generatePrimeNumbers,}
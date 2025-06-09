/**
 * generatePrimeNumbers - function to check if number is prime
 * 
 * @param {number} n number to check
 * @return {boolean} true or false
 */
function primarity(n){

    for (let i=2; i*i <=n; i++)
    {
        if (n % i === 0)
            return false;
    }

    return true;
    
}


/**
 * generatePrimeNumbers - function to check if number is prime
 * 
 * @param {number} n number to check
 * @return {boolean} true or false
 */
function checkIfPrimeNumber(n)
{
    return primarity(n);
}

module.exports = {
    checkIfPrimeNumber,
}
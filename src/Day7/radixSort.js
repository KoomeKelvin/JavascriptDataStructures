/**
 * 
 * @param {array} array to sort 
 * @param {number} expression in 1's. 10's ... 
 */
function countSort(arr, expression){
    let numberOfElements = arr.length;
    if (numberOfElements === 0) return;
    let outputArray = new Array(numberOfElements);
    let occurenceArray = new Array(10).fill(0);
    // Count occurrences of digits
    for (let i = 0; i < arr.length; i++) {
        const digit = Math.floor(arr[i] / expression) % 10;
        occurenceArray[digit]++;
    }

    // Update count[i] to be the actual position of this digit in output[]
    for (let i = 1; i < 10; i++) {
        occurenceArray[i] += occurenceArray[i - 1];
    }

    // Build the output array
    for (let i = arr.length - 1; i >= 0; i--) {
        const digit = Math.floor(arr[i] / expression) % 10;
        outputArray[occurenceArray[digit] - 1] = arr[i];
        occurenceArray[digit]--;
    }

    // Copy output[] to arr[]
    for (let i = 0; i < arr.length; i++) {
        arr[i] = outputArray[i];
    }
}
/**
 * 
 * @param {array} arr array to sort
 * @returns {array} sorted array/
 */
function radixSort(arr){
    let maxElement = Math.max(...arr);
    for(let expression = 1; Math.floor(maxElement / expression ) > 0; expression *=10)
    {
        countSort(arr, expression);
    }
    return arr;

}

/**
 * sortArray(arr) sorts arr
 * 
 * @param {array} arr array to sort
 * @returns {array} sorted array
 */
function sortArray(arr){
    return radixSort(arr);
}


module.exports = {sortArray,}
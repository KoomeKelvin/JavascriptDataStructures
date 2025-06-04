/**
 * partitionArray checks if elements are less than 
 * pivot and pushes their index for swapping
 * 
 * @param {array} array to pivot
 * @param {number} low current lowest index
 * @param {number} high current highest index
 * 
 */
function partitionArray(arr, low, high)
{
    let pivot = arr[high];
    let boundary = low -1;

    for (k = low; k <= high-1; k++){
        if (arr[k] < pivot){
            boundary++;
            swap(arr, boundary, k);
        }
    }
    swap(arr, boundary + 1, high);
    return boundary + 1;
}

/**
 * swap swaps two values
 * @param {array} arr array with swap values
 * @param {number} i index to swap
 * @param {number} j index to swap
 * 
 */
function swap(arr, i, j)
{
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

/**
 * quickSort calls partitionArray recursively until
 * there is one element left in subarrays 
 * 
 * @param {array} arr array partition to sort
 * @param {number} low the low index
 * @param {number} high the high index 
 * 
 */
function quickSort(arr, low, high)
{
    if (low >= high) return;

    let pi = partitionArray(arr, low, high);

    quickSort(arr, low, pi-1);
    quickSort(arr, pi+1, high);
}
/**
 * sortArray - calls the quickSort to sort the array
 * 
 * @param {array} array to sort 
 * @returns {array} sorted array
 */
function sortArray(arr)
{
    quickSort(arr, 0, arr.length - 1);
    return arr;
}




module.exports = {sortArray,}
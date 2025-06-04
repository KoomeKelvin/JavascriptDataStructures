/**
 * merge compares the left part with the right part and 
 * modifies an array to arr[l] based on the lowest to highest
 * values of both the left and right part of the array.
 * 
 * @param {array} arr array to merge.
 * @param {number} low lowest index
 * @param {number} midIndex middle index
 * @param {number} high highest index
 * 
 * 
 */

function merge(arr, low, midIndex, high)
{
    let leftSize = (midIndex - low + 1);
    let rightSize = (high - midIndex);
    const leftArr = new Array(leftSize);
    const rightArr = new Array(rightSize);

    for(let i = 0; i < leftSize; i++){
        leftArr[i] = arr[low + i];
    }

    for(let i = 0; i < rightSize; i++){
        rightArr[i] = arr[midIndex + 1 + i];
    }

    let k = 0, j = 0, l = low;
    while(k < leftSize && j < rightSize)
    {
        if (leftArr[k] < rightArr[j]){
            arr[l] = leftArr[k];
            k++;
        }else{
            arr[l] = rightArr[j];
            j++;
        }
        l++;
    }

    while(j < rightSize)
    {
        arr[l] = rightArr[j];
        j++;
        l++;
    }

    while(k < leftSize){
       arr[l] = leftArr[k];
        k++;
        l++;
    }
}

/**
 * mergeSort - recursively splits arr into two 
 * on the left side then on the right then calls merge
 * 
 * @param {array} array to be sorted
 * @param {number} low current low index
 * @param {number} high current high index
 * 
 */

function mergeSort(arr, low, high){
    if(low >= high) return;

    const midIndex = Math.floor((low + high)/2);

    mergeSort(arr, low, midIndex); // recursively go left returning bases.
    mergeSort(arr, midIndex + 1, high); // recursively go right returning bases.

    merge(arr, low, midIndex, high);
}

/**
 * sortArray calls the mergeSort to do the sorting.
 * 
 * @param {array} arr array to sort
 * @returns {array} arr sorted array.
 */
function sortArray(arr){
    mergeSort(arr, 0, arr.length - 1);
    return arr;
}


module.exports = {sortArray}
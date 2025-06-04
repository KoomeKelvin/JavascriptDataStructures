
/**
 * insertionSort - returns sorted array
 * 
 * @param {array} arr
 * @returns {array}
 */
function insertionSort(arr){
    // we will assume that first value is sorted (index 0)
    for (let i = 1; i < arr.length; i++)
    {
        // value in unsorted part to insert in sorted part
        let valueToInsert = arr[i];

        // j will be used to loop from 0 to the index before valueToInsert.
        let j = i-1;
        while(j >=0 && arr[j] > valueToInsert){
            
            // shift the value in index j to the next index. 
            arr[j+1] = arr[j];
            j--; // decrement j so as to loop down the sorted part.
        }
        // if it happens that arr[j] was less than valueToInsert
        // we assign valueToInsert one index past j the greater part.
        arr[j+1] = valueToInsert; 
    }
    
    return arr;
}


/**
 * sortArray - invokes insertionSort
 * 
 * @param {arr} array to sort
 * @returns {array} sorted array
 */

function sortArray(arr){
    return insertionSort(arr);

}




module.exports = {sortArray}
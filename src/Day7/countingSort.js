/**
 * getMax computes maximum element in an array
 * 
 * @param {array} arr
 * @returns {number}
 */

function getMax(arr){
    
    let maxElement = arr[0]; // assume maximum is first element
    for (let i= 0; i< arr.length; i++){
        // ohter element > than arr[0] will be new maxElement
        if (arr[i] > maxElement){
            maxElement = arr[i];
        }
    }
    return maxElement;
}

/**
 * countingSort() receives unsorted arr and sorts it
 * 
 * @param {array} arr unsorted array
 * @returns {array} sorted array
 * 
 */
function countingSort(arr)
{
    // arr = [5, 7, 3, 4, 1, 5, 8]
   const noOfInputItems = arr.length;
   if (noOfInputItems === 0) return;
   
   let maxElement = getMax(arr);
   // create an occurrence array equal to the size of max element + 1 initialize elements to 0
   
   let occurenceArray = new Array(maxElement+1).fill(0);

    // store the frequencies of each element to the occurence array created
   for (let i= 0; i < noOfInputItems; i++)
    {
        occurenceArray[arr[i]]++;
    }
    //  loop through the occurence array each assigning the occurence array items to our arr
    
    let index = 0;
    for (let k = 0; k < occurenceArray.length; k++){
        while(occurenceArray[k] > 0){
            
            // assign arr[0] to occurenceArray[k] then increment to arr[1]
            arr[index++] = k;
            // decrement occurenceArray[k] so as to reduce the frequency
            occurenceArray[k]--;
        }
    }
    return arr;

}


/**
 * 
 * @param {*} arr 
 * @returns {array} sorted array
 */
function sortItems(arr)
{
    return countingSort(arr);
}

module.exports = {sortItems,}
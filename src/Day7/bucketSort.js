/**
 * insertionSort(arr) sorts arr
 * 
 * @param {array} arr array to be sorted
 * @returns {array} sorted array
 */
function insertionSort(arr){
    if (arr.length === 0) return;
    
    for(let i = 1; i < arr.length; i++){
       let j = i-1; 
       let key = arr[i]
       while(j >=0 && arr[j] > key ){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = key;
    }
    return arr;
    
}

/**
 * 
 * @param {array} arr array to be sorted 
 * @returns {array} sorted array
 */
function bucketSort(arr){

    let noOfInputItems = arr.length;
    if(noOfInputItems === 0) return;

    // example arr = [0.78, 0.99, 0.34, 0.67, 0.56].
    // create buckets equal to size of arr and insert elements.
    let buckets = Array.from({length: noOfInputItems}, ()=>[]);
    for (let i= 0; i< noOfInputItems; i++){
        let bucketIndex = Math.floor(arr[i]*noOfInputItems);
        buckets[bucketIndex].push(arr[i]);
    }

    // sort individual buckets
    for (let k = 0; k < buckets.length; k++){
        insertionSort(buckets[k]);
    }

    // merge buckets
    let sortedIndex = 0;
    for(let i = 0; i < buckets.length; i++){
        for (let j = 0; j < buckets[i].length; j++){
            arr[sortedIndex++]=buckets[i][j];
        }
    }

    return arr;

}

/**
 * 
 * @param {array} arr unsorted array
 * @returns {array} sorted array
 */
function sortArray(arr)
{
    return bucketSort(arr);
}


module.exports ={sortArray,}
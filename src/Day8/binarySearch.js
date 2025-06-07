/**
 * binarySearch searches for an item.
 * 
 * @param {array} arr to search from
 * @param {*} item to look for
 * @param {number} low first index
 * @param {number} high last index
 * 
 * @returns {boolean} 
 */
function binarySearch(arr, item, low, high){
    if(low > high) return false;
    const midIndex = Math.floor((low + high)/2);
    if(arr[midIndex] === item) return true;
    if(arr[midIndex] < item){
        return binarySearch(arr, item, midIndex+1, high);
    }else{
        return binarySearch(arr, item, low, midIndex-1);
    }
}


/**
 * searchFor calls binarySearch which does search
 * 
 * @param {array} arr to search from
 * @param {*} item to look for
 * @param {number} low first index
 * @param {number} high last index
 * 
 * @returns {boolean} 
 */
function searchFor(arr, item, low, high)
{
    return binarySearch(arr, item, low, high);
}

module.exports = {searchFor,}
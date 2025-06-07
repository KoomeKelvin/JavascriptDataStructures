
/**
 * @param {array} arr to search for 
 * @param {*} item to search for
 * @returns {boolean} true or false 
 */
function linearSearch(arr, item)
{
    const numberOfElements = arr.length;
    for(let i = 0; i < numberOfElements; i++){
        if(arr[i] === item){
            return true;
        }
    }
    return false;
}


/**
 * 
 * @param {array} arr array to search in 
 * @param {*} item to search for 
 * @returns {boolean} true if found false otherwise.
 */
function searchFor(arr, item){
    return linearSearch(arr, item);
}


module.exports = {searchFor,}
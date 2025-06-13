/**
 * slidingWindowLongestUniqueSubstr 
 * 
 * @param {string} str string to check from 
 * @returns {number} length of longest substring without repeating characters
 * 
 */
function slidingWindowLongestUniqueSubstr(str){
    if(str.length === 0 || str.length === 1) return str.length;
     
    let results = 0;
    let visitedArr = new Array(26).fill(false);

    let left = 0, right = 0;
    while(right < str.length){
         while(visitedArr[str[right].charCodeAt(0) - 'a'.charCodeAt(0)] === true){
            visitedArr[str[left].charCodeAt(0) -  'a'.charCodeAt(0)] = false;
            left++;
         }
         visitedArr[str[right].charCodeAt(0) - 'a'.charCodeAt(0)] = true;
         results = Math.max(results, (right - left + 1));
         right++;
    }
    return results;
}



/**
 * longestUniqueSubstr 
 * 
 * @param {string} str string to check from 
 * @returns {number} length of longest substring without repeating characters
 * 
 */
function longestUniqueSubstr(str){
    return slidingWindowLongestUniqueSubstr(str);
}

module.exports = {longestUniqueSubstr,}
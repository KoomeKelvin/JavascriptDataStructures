/**
 * naiveLongestUniqueSubstr
 * 
 * @param {string} str string to look for characters from
 * @return {number} count of longest substring without repeating chars.
 * 
 */
function naiveLongestUniqueSubstr(str){

    let markVisitiedArr = new Array(26).fill(false);
    let n = str.length;
    let longestSubstringLength = 0;

    for(let i = 0; i < n; i++){

        for (let j = i; j < n; j++)
        {
            if(markVisitiedArr[str.charCodeAt(j) - 'a'.charCodeAt(0)] === true)
                break;
            else{
                longestSubstringLength = Math.max(longestSubstringLength, j - i + 1);
                markVisitiedArr[str.charCodeAt(j) - 'a'.charCodeAt(0)] = true;
            }
        }
        markVisitiedArr.fill(false)
        }
        return longestSubstringLength;
    }
   


/**
 * longestSubstringWithoutRepeatingCharacters
 * 
 * @param {string} str string to look for characters from
 * @return {number} count of longest substring without repeating chars.
 * 
 */

function longestUniqueSubstr(str)
{
    return naiveLongestUniqueSubstr(str);
}

module.exports = {longestUniqueSubstr,}
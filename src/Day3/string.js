
/**
 * lengthOfString returns length of string
 * 
 * @param {string} firstName 
 * @returns {string} of firstName without leading space
 */
function traverseString(firstName){
    let totalChar = " ";
    for(let char of firstName){
        totalChar += char;
    }
    return totalChar.trimStart();
}

/**
 * inToString inserts a letter to a string at given position
 * 
 * @param {string} "string" to modify
 * @param {char} letter to insert
 * @param {number} position to insert at
 * @returns {string} final string with new data
 */
function inToString(letter, position, firstName){
    return firstName.slice(0, position) + letter + firstName.slice(position);
}

/**
 * deleteInString 
 * 
 * @param {number} position  to insert at
 * @param {string} "string" to delete from
 * @returns {string} string with deleted data
 */
function deleteInString(position, firstName)
{
    return firstName.slice(0, position) + firstName.slice(position + 1);

}

/**
 * searchInString checks if a character is in a string
 * 
 * @param {character} searchFor the item to look for 
 * @param {string} firstName string to look for item
 * @returns {*} truthy or falsy value
 */

function searchInString(searchFor, firstName){
    return firstName.includes(searchFor);
}

module.exports = {
    traverseString,
    inToString,
    deleteInString,
    searchInString
}
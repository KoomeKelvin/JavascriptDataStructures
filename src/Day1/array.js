/**----------------------------------------------------------------------
 * insertToArray - function insert an element to an array
 * 
 * @param {number} ageToInsert
 * @param {number} index
 * @param {array} ageArray
 * @returns {number} 
 * 
 */
function insertToArrayUsingSplice(ageToInsert, index, ageArray){
    ageArray.splice(index, 0, ageToInsert);
    return ageArray[index];
}

/**------------------------------------------------------------------------
 * insertToArrayUsingFor - function insert an element to an array
 * 
 * @param {number} ageToInsert
 * @param {number} index
 * @param {array} ageArray
 * @returns {number} 
 * 
 */
function insertToArrayUsingFor(ageToInsert, index, ageArray){
    for(let i = ageArray.length; i > index; i--){
        ageArray[i] = ageArray[i-1];
    }
    ageArray[index] = ageToInsert;
    return ageArray[index];
}

/**----------x@koomekelvink------------------------------------------------
 * deleteFromArray - function insert an element to an array
 * 
 * @param {number} index
 * @param {array} ageArray
 * @returns {number} 
 * 
 */

function deleteFromArrayUsingSplice(index, ageArray){
    ageArray.splice(index, 1);
    return ageArray[index];
}

/**
 * deleteFromArrayUsingFor - function delete an element from an array
 * 
 * @param {number} index
 * @param {array} ageArray
 * @returns {number} 
 * 
 */
function deleteFromArrayUsingFor(index, ageArray){
    for(let i = index; i < ageArray.length - 1; i++){
        ageArray[i] = ageArray[i + 1];
    }
    ageArray.pop();
    return ageArray[index];
}

/**------------------------------------------------------------------------
 * linearSearchForElement looks for an element in the array age
 * 
 * @param {array} age
 * @param {number} element
 * @returns {number} 
 */
function linearSearchForElement(element, age){

    for(let i = 0; i < age.length; i++){
        if(age[i] === element) return i;
            
    }
    return -1;
}

/**
 * linearSearchForElementUsingForEach looks for an element in the array age
 * 
 * @param {array} age
 * @param {number} element
 * @returns {number} 
 */
function linearSearchForUsingFindIndex(element, age){
    return age.findIndex((value)=> value === element);
}

/**------------------------------------------------------------------------
 * binarySearchForElement searches for an index using binary
 * 
 * @param {array} age sorted array
 * @param {number} element
 * @returns {number} 
 */
function binarySearchForElement(element, age){
    let left = 0;
    let right = age.length - 1;
    
    while(left <= right ){
        const midIndex = Math.floor((left + right)/2);
        if (age[midIndex] === element){
            return midIndex;
        }else if(age[midIndex] < element){
            left = midIndex + 1;
        }else{
            right = midIndex - 1;
        }
    }
    return -1;
}

/**
 * binarySearchForElement searches for an index using binary
 * 
 * @param {array} age sorted array
 * @param {element} element item to look for
 * @param {number} left lowest index to look for 
 * @param {number} right highest index to look for
 * @returns {number}
 */
function binarySearchForElementUsingRecursion(age, element, left, right){

    if (left > right) return -1;

    const mid = Math.floor((left + right)/2);

    if(age[mid] === element)
        return mid;
    else if(age[mid] < element)
        return binarySearchForElementUsingRecursion(age, element, mid + 1 , right);
    else
        right = mid -1;
        return binarySearchForElementUsingRecursion(age, element, left, mid - 1);
}



module.exports = {
    insertToArrayUsingSplice,
    deleteFromArrayUsingSplice,
    insertToArrayUsingFor,
    deleteFromArrayUsingFor,
    linearSearchForElement,
    linearSearchForUsingFindIndex,
    binarySearchForElement,
    binarySearchForElementUsingRecursion
};
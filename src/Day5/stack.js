/**
 * @param {object} stackInstance instance of stack
 * @param {*} element to add to the stack
 * @returns {number} the stack height
 */
function pushToStack(stackInstance, element){
    return stackInstance.pushStack(element);
}

/**
 * 
 * @param {object} stackInstance 
 * @returns popped value
 */
function popFromStack(stackInstance){
    return stackInstance.popStack();
}

/**
 * 
 * @param {object} stackInstance 
 * @returns last top element if its there.
 */
function peekFromStack(stackInstance){
    return stackInstance.peekStack();
}

module.exports = {pushToStack, popFromStack, peekFromStack}
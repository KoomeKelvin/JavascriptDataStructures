/**
 * 
 * @param {object} taskQueue instance of queue
 * @returns {number} number of elements.
 */
function numberOfElementsInQueue(taskQueue){
    return taskQueue.queuedElements();
}


/**
 * addQueueElement - adds queue element
 * 
 * @param {object} taskQueue instance of queue to add
 * @param {*} elementToAdd element to add
 * @returns {number} returns length of queue
 */

function addQueueElement(taskQueue, elementToAdd){
    return taskQueue.enqueue(elementToAdd);
}

/**
 * processQueue checks the processed item
 * 
 * @param {object} taskQueue 
 * @returns {string} with item to process
 */
function processQueue(taskQueue){
    return `Task ${taskQueue.dequeue()} processed`;
}

/**
 * nextItemToProcessInQueue process next item
 * 
 * @param {object} taskQueue 
 * @returns  {*} next item to be processed
 */
function nextItemToProcessInQueue(taskQueue){
    return taskQueue.peek();
}

module.exports = {numberOfElementsInQueue, addQueueElement, processQueue, nextItemToProcessInQueue}


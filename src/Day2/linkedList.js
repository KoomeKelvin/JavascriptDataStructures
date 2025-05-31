/**
 * traverseLinkedList should traverse the list
 * 
 * @param {number} head value of pointer to first node.
 * @returns {number} last item on the list.
 */
function traverseSinglyLinkedList(head){

    let current = head;

    while(current.next != null)
    {
        current = current.next;
    }
    return current.data;

}

/**
 * searchItemInLinkedList searches item
 * 
 * @param {*} head
 * @param {number} searchItem
 * @returns {boolean}
 */
function searchItemInSinglyLinkedList(head, searchItem){
    let current = head;
    while(current != null){
        if (current.data === searchItem) return true;  
        current = current.next;
    }
    
    return false;
}

/**
 * findLengthOfLinkedList finds the length
 * 
 * @param {*} head 
 * @returns {number} 
 */
function findLengthOfSinglyLinkedList(head){
    let current = head;
    let length = 0;
    while(current != null){
        current = current.next;
        length++;
    }
    return length;
}

/**
 * insertNodeAtBeginning- insert node at start of list
 * 
 * @param {object} node0 new node to insert.
 * @param {object} currentHead the current head
 * @returns {object} the new head of the linked list
 */
function insertNodeAtBeginning(node0, currentHead)
{
    node0.next = currentHead;
    return node0;
}

/**
 * 
 * @param {Object} node5  node to insert at the end of list
 * @param {Object} head the current head
 * @returns {Object} current last node
 */

function insertNodeAtEnd(node5, head)
{
     if (head == null) return node5;
    let current = head;
    while(current != null){
        current = current.next;
    }
    current = node5;
    node5.next = null;
    return node5;
}

/**
 * insertNodeAt inserts node at specific position
 * 
 * @param {Object} node6 - new node to insert
 * @param {Object} head - Current head node
 * @param {number} position - Position to insert
 * @returns {Object} - inserted node and its position
 */
function insertNodeAt(node6, head, position){
    if(position === 0){
        node6.next = head;
        return node6; 
    }

    let current = head;
    let nodePosition = 0;
    while(current != null && nodePosition < position - 1){
        current = current.next;
        nodePosition++;
    } 
    if(current.next === null){
        throw new Error("out of bound");
    }
    node6.next = current.next;
    current.next = node6
    return head;
}


/**
 * linkedListToArray converts linked list to array
 * 
 * @param {Object} head current head
 * @returns {array} 
 * 
 */
function linkedListToArray(head) {
    const result = [];
    let current = head;
    while (current) {
        result.push(current.data);
        current = current.next;
    }
    return result;
}

/**
 * deleteNodeAtBeginning - deletes first node
 * 
 * @param {Object} head 
 * @returns {Object}
 */
function deleteNodeAtBeginning(head) {
    if (!head) return null;
    return head.next;
}

/**
 * deleteNodeAtEnd - deletes last node
 * 
 * @param {Object} head - head node
 * @returns {Object}
 */
function deleteNodeAtEnd(head) {
    if (!head || !head.next) return null;

    let current = head;
    while (current.next.next !== null) {
        current = current.next;
    }
    current.next = null;
    return head;
}

/**
 * 
 * @param {*} head current head
 * @param {*} position 
 * @returns {Object} 
 */
function deleteNodeAt(head, position) {
    if (!head) return null;
    if (position === 0) return head.next;

    let current = head;
    let index = 0;

    while (current !== null && index < position - 1) {
        current = current.next;
        index++;
    }

    if (current === null || current.next === null) {
        throw new Error("Position out of bounds");
    }

    current.next = current.next.next;
    return head;
}


module.exports = {
    traverseSinglyLinkedList,
    searchItemInSinglyLinkedList,
    findLengthOfSinglyLinkedList,
    insertNodeAtBeginning,
    insertNodeAtEnd,
    insertNodeAt,
    linkedListToArray,
    deleteNodeAtBeginning,
    deleteNodeAtEnd,
    deleteNodeAt,
}
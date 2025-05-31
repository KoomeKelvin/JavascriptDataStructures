const {traverseSinglyLinkedList, searchItemInSinglyLinkedList, 
    findLengthOfSinglyLinkedList, insertNodeAtBeginning, insertNodeAtEnd,
    insertNodeAt, linkedListToArray, deleteNodeAtEnd, deleteNodeAt, deleteNodeAtBeginning,}
     = require('../linkedList.js');

let node0, node1, node2, node3, node4, node5, node6; 
class Node{

        constructor(data){
            this.data = data;
            this.next = null;
        }
    }

beforeEach(()=>{
    node1 = new Node(30);
    node2 = new Node(40);
    node3 = new Node(50);
    node4 = new Node(60);

    head = node1;
    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
});


test('Checks if last item returned on the list is 60', ()=>{
    expect(traverseSinglyLinkedList(head)).toBe(60)
});

test('search for 40 and return true', ()=>{
    expect(searchItemInSinglyLinkedList(head, searchItem = 40)).toBe(true)
});

test('find the length of the linked list', ()=>{
    expect(findLengthOfSinglyLinkedList(head)).toBe(4);
});

test('insert node at start of linked list which is the new head', ()=>{
    node0 = new Node(20);
    const newHead = insertNodeAtBeginning(node0, head);
    expect(newHead.data).toBe(20);
    expect(newHead.next.data).toBe(30);
});

test('insertion node at end of the list', ()=>{
    node5 = new Node(70);
    const lastNode = insertNodeAtEnd(node5, head);
    expect(lastNode.data).toBe(70);
    expect(lastNode.next).toBe(null);
});

test('insertion of node at a given position on the list', ()=>{
    node6 = new Node(70);
    const insertedNode = insertNodeAt(node6, head, position = 2);
    expect(linkedListToArray(insertedNode)).toEqual([30, 40, 70, 50, 60]);
});

test('delete node at start', () => {
    const newHead = deleteNodeAtBeginning(head);
    expect(linkedListToArray(newHead)).toEqual([40, 50, 60]);
});

test('delete node at end', () => {
    const updatedHead = deleteNodeAtEnd(head);
    expect(linkedListToArray(updatedHead)).toEqual([30, 40, 50]);
});

test('delete node at a given position', () => {
    const updatedHead = deleteNodeAt(head, 2); 
    expect(linkedListToArray(updatedHead)).toEqual([30, 40, 60]);
});

 test('delete node at position out of bounds (should throw error)', () => {
    expect(() => deleteNodeAt(head, 5)).toThrow('Position out of bounds');
  });
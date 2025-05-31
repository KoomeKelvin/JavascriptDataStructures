## In Day two we looked at 

- Traversing data in a Singly Linked list 
- Inserting data in a Singly Linked list  
- Deleting data from a Singly Linked list 
- Searching data in the Linked list .

## Traversing a linked list
* A linked list is made up of nodes where each node has data and a pointer to the 
next node. In linked list data is accessed sequentially from the head node to the last 
node which points to null. The traversal takes O(n) time and O(1) space complexity as 
only a pointer is used to access all the nodes which consumes constant space.

## Searching item in Singly linked list
* To Search the item we loop through the nodes from the head node every time comparing 
the node data with the item being looked for, if found we return true. This takes O(n)
time and O(1) for space complexity. 

## Inserting node at the beginning of a Singly linked list
* To takes O(1) time complexity and O(1) space complexity as the new node is attached
to point to the current head.

## Inserting node at the end of a Singly linked list
* To takes O(n) time complexity as in worst case we traverse the whole list. It also has
O(1) space complexity. The new node is attached to point to last node which was pointing to null.

## Inserting node at any position of a Singly linked list
* To takes O(n) time complexity as in worst case we traverse the whole list. It also has
O(1) space complexity. The new node is attached to point to last node which was pointing to null.

## Deleting node at the beginning of a Singly linked list
* To takes O(1) time complexity and O(1) space complexity.

## Deleting node at the end of a Singly linked list
* To takes O(n) time complexity as in worst case we traverse the whole list. It also has
O(1) space complexity. 

## Deleting node at any position of a Singly linked list
* To takes O(n) time complexity as in worst case we traverse the whole list. It also has
O(1) space complexity.


### TAKE AWAYS
- **Its a good practice to work with functions which are not tightly coupled especially**
**when passing objects/dependencies (head node) to let's say insert function, the function should**

- **When inserting a node at any specified position we should consider for edge cases such as if**
**the linked list is empty or if the specified position goes out of bound**

- **When writing tests create the class in the global space and explicitly declare variables such as node1**
**node2 in the same space. This is to allow for access between various functions**





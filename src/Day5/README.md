## In Day four we looked at 

- Stack operations using the lovely object pointers we found in queues to achieve O(1) time and memory complexity.
- Checking stack height.
- Adding element to the stack. 
- Removing element from the stack.
- returning the last element in the stack.

## Stack operations using object pointers to achieve O(1) time and memory complexity.
* A stack is a last-in-first-out data structure where the last item to be taken in is the first item
to be taken out. To achieve O(1) time and memory complexity we make use of object pointer (head) which
points to the object data which stores stack data. Alternatively, we could make use of Array.pop() and 
Array.push() which also has O(1) complexities, if we preferred using arrays over objects but i got hooked up with the simplicity in object
pointers. 

## Checking the stack height .
* Since we have a pointer head which is initialized to 0 in the Stack class constructor, every time we 
perform the pushStack() we increment this pointer which when returned in stackHeight() method gives us 
the height of the stack. This takes O(1) constant time and O(1) space complexity since we return simple 
value this.head.

## Adding element to the stack.
* To add an element to the stack we assign the value to the position of the data object pointed by this.head.
After that we incement this.head to point to the next empty space. Adding elements this way takes O(1) time
and space complexity.

## Removing element from the stack.
* We first check whether the stack height is empty if it is we return undefined otherwise we delete the last element that was pushed in the array by passing to data object this.head (which points to an empty space after it was incremented) and subtract 1 to explicitly point at the index of the top most element.This takes O(1) space and time complexity.

## returning the last element in the stack..
* we check if the stack is empty if it is not we return the data[this.head-1] which points at the index of the last pushed element. This takes O(1) space and time complexity.

### TAKE AWAYS
- **If we use object pointers such as head every time we push an element we should increment the pointer to** **point at the new space**

- **To pop from a stack we should check the index of the last element hereby head-1 and then remove the element it points to using delete.**

-**To test for edge cases we should check if the stack is empty before pop or peek**







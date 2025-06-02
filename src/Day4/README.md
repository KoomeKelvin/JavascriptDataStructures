## In Day four we looked at 

- Why using array methods like shift() increases time complexity and why we should avoid them for pointers.
- Checking queue length.
- Adding to the queue. 
- Checking next item to process.
- Processing the queue.

## Why using array methods like shift() increases time complexity and why we should avoid them for pointers.
* A queue is a first-in-first-out data structure meaning the first item inside is the first item to be processed and the last in is the last to process. Most queue operations have a O(1) time complexity but 
if we used shift() to remove the first element from the queue the entire array must be reindexed thus O(n)
time complexity. We prefer using manually using head and tail pointers to our object that hold the queue data.
which has O(1) time complexity.

## Checking the queue length.
* When we add an element to the queue we take an initialized pointer tail in the constructor and increment it, 
also when we remove an element from the queue we take the initialized pointer head and increment it. To find 
the length we subtract the head from the tail to get the difference thereby we get the length. This takes 
constant time O(1) and space complexity is O(1). 

## Adding to the queue.
* To add an element to the queue we take our initialized object to store the elements and the new elemet to the object[tail]. This has O(1) space complexity and time complexity.

## Checking next item to process.
* Since we have pointer head which points to the first element we just return object[head]. This operation 
takes O(1) time and space complexity.

## Processing the queue.
* If we were to use shift to remove and return the first element from the queue we would reindex the entire
array thus O(n). To solve this we use an object together with the tail and head which are initialized in the constructor, this takes O(1) space and time complexity.

### TAKE AWAYS
- **Objects are more preferrable that array in the queue as Array methods sucha as shift would reindex the** 
**entire array**

- **To use objects we then would use a head and tail pointer objects which would point to the object elements**

-**Optimization of queues ensures that the queue operations takes O(1) time and space complexity**







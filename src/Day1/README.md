## In Day one we looked at 

- Traversing data in an Array which included
    - Inserting data in an Array 
    - Deleting data from an Array
- Searching data in the Array.

## Inserting data in Array
* We make use of a **for loop** where we move the all elements (past the index
of where we wish to insert the element) to the right starting from the end 
element. This takes complexity of **O(n)** as all elemekts have to shift in
worst case. Alternavitely we also use **splice** which also has a time 
complexity of O(n) and a space complexity of O(1) constant as no new array
is created.

## Deleting data in Array
* We make use of a **for loop** where we move the all elements (left of the index
of where we wish to insert the element) to the left. This takes complexity of **O(n)**
as all elemekts have to shift in worst case. Alternavitely we also use **splice**
which also has a time complexity of O(n) and a space complexity of O(1) constant
as the array is modified in place. 

## linear Searching data in Array
* We make use of a **for loop** which in worst case could check all the elements
thus O(n) time however it has O(1) space complexity as no new array is created. 
This is also similar when we use **findIndex**

## binary Searching data in Array
We make use of a **while loop** where we divide the array into two every time thus 
we get **O(log n)** time complexity with a space complexity of **O(1)** no new arrays
are created. Alternatively we use **recursion** which takes **O(log n)** time complexity
and O(log n) space complexity as each time the recursive call divides everything into half.


### TAKE AWAYS
- **when inserting data using loops always start by pushing the last element in the array to the right**
**all the way downwards to the position next to the area you wish to insert the element**

- **When making use of binary search always divide the array into two (left + right)/2 which forms the**
**mid index which should be used to determine the match index or new left and right.**

- **The mid variable should inside the while loop in binary search should be a _const_ to avoid modifications**
**it is also redeclared every new time the loops runs as const is block scoped**





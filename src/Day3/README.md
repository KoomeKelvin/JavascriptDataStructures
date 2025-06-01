## In Day three we looked at 

- Traversing data in a String 
- Inserting data in a String  
- Deleting data from a String 
- Searching data in a String .

## Traversing a string
* A string is made up of characters and traversing from the first character to the last (n)
would take us n time thus O(n) time complexity. There is no new string created during the
traversal thus constant space, thereby space complexity is O(1)

## Searching item in string
* To search the item in worst case, we loop n times in a string of length n thus the time
complexity is O(n) however there is no new string that is created thus O(1) space complexity.

## Inserting a letter (item) at a given position in the string
* Strings are _immutable_ meaning they cannot be modified without creating new ones. To insert
n letters we would require to create n spaces thus space complexity of O(n). To insert a letter
to a string at worst it would be at the end of the string which would take us n iteration thus 
a time complexity of O(n).

## deleting a character to a string given its position. 
* This would require a worst case of O(n) in terms of time complexity as we would have to iterate
n times to delete the last character of a string. A new string is created since we have to split
the first portion of the string up to the position using slice and then remove the charater and 
then concatenate with the remainder of the string that is a slice of position + 1. This creates 
a new string which grows proportionally to the size thus O(n) space complexity.


### TAKE AWAYS
- **Strings are immutable that making some operations like insert and delete on them would lead**
**to O(n) space and O(n) time complexity.**

- **When traversing a string we can make use of a for ..of and when inserting and deleting string**
**element we can make use of the slice string method**

-**when searching for an item we can make use of stringToSearchFrom._includes()_ which returns true**
**if the substring is found or false otherwise.**







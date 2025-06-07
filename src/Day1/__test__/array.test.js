const {insertToArrayUsingSplice, deleteFromArrayUsingSplice, insertToArrayUsingFor, 
     deleteFromArrayUsingFor, linearSearchForElement, linearSearchForUsingFindIndex,
     binarySearchForElement, binarySearchForElementUsingRecursion,
    } = require('../array.js') ;

let age;
beforeEach(()=>{
    age = [14, 34, 45, 67];
});



test('checks element is inserted at position 2 using splice', ()=> {
    expect(insertToArrayUsingSplice(10, 2, age)).toBe(10);
});

test('checks element is inserted at position 2 using for', ()=> {
    expect(insertToArrayUsingFor(10, 2, age)).toBe(10);
});



test('checks element is deleted at position 2 using splice', ()=> { 
    expect(deleteFromArrayUsingSplice(2, age)).toBe(67);
});

test('checks element is deleted at position 2 using for', ()=> { 
    expect(deleteFromArrayUsingFor(2, age)).toBe(67);
});



test('checks that element 45 is found at index 2 using for loop', ()=> {
    expect(linearSearchForElement(45, age)).toBe(2);
});

test('checks that element 45 is found at index 2 using findIndex', ()=> {
    expect(linearSearchForUsingFindIndex(45, age)).toBe(2);
});



test('checks that element 45 is found at index 2', ()=> {
    expect(binarySearchForElement(45, age.sort())).toBe(2);
});

test('it checks that element 45 is found at index 2 uses recursion', ()=> {
    let element = 45, left = 0, right= age.length-1;
    expect(binarySearchForElementUsingRecursion(age.sort(), element, left, right));
});

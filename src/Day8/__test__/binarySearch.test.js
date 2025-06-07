const {searchFor} = require("../binarySearch.js")

test("searches for an item using binary search", ()=>{
    
    const arr = [10, 15, 16, 18, 19];
    let item1 = 16, item2 = 50;
    let lowIndex = 0, highIndex= arr.length-1;
    expect(searchFor(arr, item1, lowIndex, highIndex)).toBe(true);
    expect(searchFor(arr, item2, lowIndex, highIndex)).toBe(false);
});
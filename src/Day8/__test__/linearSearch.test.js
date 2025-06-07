const {searchFor} = require("../linearSearch.js")

test("searches for an item using linear search", ()=>{
    
    const arr = [10, 15, 16, 18, 19];
    let item1 = 16, item2 = 50;
    expect(searchFor(arr, item1)).toBe(true);
    expect(searchFor(arr, item2)).toBe(false);
});
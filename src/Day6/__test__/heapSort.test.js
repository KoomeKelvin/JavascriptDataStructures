const {sortArray} = require('../heapSort.js')

test("sorts an array using insertion sort", ()=>{
    expect(sortArray([5, 7, 3, 18, 4, 2, 7, 6])).toEqual([2, 3, 4, 5, 6,  7, 7, 18]);

});
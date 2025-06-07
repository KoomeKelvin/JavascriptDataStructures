const {sortArray} = require('../radixSort.js');
test('sorts data using radix sort', ()=>{
    expect(sortArray([200, 4000, 3500, 19, 9])).toEqual([9, 19, 200, 3500, 4000]);

});
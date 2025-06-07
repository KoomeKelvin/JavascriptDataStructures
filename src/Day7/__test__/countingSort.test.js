const {sortItems} = require('../countingSort.js')


test('sorts data using counting sort', ()=>{
    expect(sortItems([5, 7, 3, 4, 1, 5, 8])).toEqual([1, 3, 4, 5, 5, 7, 8]);
});

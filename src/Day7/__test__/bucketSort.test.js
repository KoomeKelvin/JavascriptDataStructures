const {sortArray} = require('../bucketSort.js');

test('sorts array using bucket Sort', () => {
    expect(sortArray([0.78, 0.99, 0.34, 0.67, 0.56])).toEqual([0.34, 0.56, 0.67, 0.78, 0.99]);

});
const {sortArray}  = require('../externalSort.js');

test("sort array using external sort", ()=>{
    const numWays = 3;
    const runSize = 5;
    const inputData =[100, 15, 200, 86, 90, 101, 131, 145, 167, 23, 14, 90, 11, 8, 6];
    expect(sortArray(inputData, numWays, runSize)).toEqual([6, 8, 11, 14, 15, 23, 86, 90, 90, 100, 101, 131, 145, 167, 200]);
});
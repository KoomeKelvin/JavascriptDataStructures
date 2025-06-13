const {longestUniqueSubstr} = require('../naiveLongestUniqueSubstr.js');

test("check for longest substring without repeating characters the naive way", ()=>{
    const valueToCheck = "koomekelvin";
    expect(longestUniqueSubstr(valueToCheck)).toBe(6);

});
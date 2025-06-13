
const {longestUniqueSubstr} = require("../slidingWindowLongestUniqueSubstr.js")


test('returns length of longest substrin without repeating characters', ()=>{
    const str = "koomekelvin";
    expect(longestUniqueSubstr(str)).toBe(6);
});


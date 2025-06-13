const {longestCommonSub} = require("../naiveLongestCommonSub.js");



test('Returns longest common subsequence the naive way', ()=>{
    
    const s1 = 'AGXGYTZ', s2 = 'XTZGYVZ';

    expect((longestCommonSub(s1, s2, s1.length, s2.length))).toBe(4);

});


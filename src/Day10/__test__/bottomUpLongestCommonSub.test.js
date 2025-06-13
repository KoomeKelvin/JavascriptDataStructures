const {longestCommonSub} = require("../bottomUpLongestCommonSub.js");



test('Returns longest common subsequence the bottom up way', ()=>{
    
    const s1 = 'AGXGYTZ', s2 = 'XTZGYVZ';

    expect((longestCommonSub(s1, s2))).toBe(4);

});


const {longestCommonSub} = require("../memoizationLongestCommonSub.js");



test('Returns longest common subsequence the memoization way', ()=>{
    
    const s1 = 'AGXGYTZ', s2 = 'XTZGYVZ';
    const m = s1.length;
    const n = s2.length;
    const memo = Array.from({length : m + 1},
                            () => Array(n + 1).fill(-1));

    expect((longestCommonSub(s1, s2, m, n, memo))).toBe(4);
});


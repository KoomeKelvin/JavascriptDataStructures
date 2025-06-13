/**
 * memoizationLongestCommonSub returns common subsequence in two strings
 * 
 * @param {string} s1 string 1
 * @param {string} s2 string 2
 * @returns {number} longest subsequence
 * 
 */
function memoizationLongestCommonSub(s1, s2, m, n, memo)
{
    // Base Case
    if (m === 0 || n === 0)
        return 0;

    // If it already exists in the memo table
    if (memo[m][n] !== -1)
        return memo[m][n];

    // If there is a match
    if (s1[m - 1] === s2[n - 1]) {
        memo[m][n] = 1 + memoizationLongestCommonSub(s1, s2, m - 1, n - 1, memo);
        return memo[m][n];
    }

    // Do not match
    memo[m][n] = Math.max(memoizationLongestCommonSub(s1, s2, m, n - 1, memo),
                          memoizationLongestCommonSub(s1, s2, m - 1, n, memo));
    return memo[m][n];
}

/**
 * memoizationLongestCommonSub returns common subsequence in two strings
 * 
 * @param {string} s1 string 1
 * @param {string} s2 string 2
 * @returns {number} longest subsequence
 * 
 */

function longestCommonSub(s1, s2, m, n, memo)
{

    return memoizationLongestCommonSub(s1, s2, m, n, memo);
}

module.exports = {longestCommonSub,}

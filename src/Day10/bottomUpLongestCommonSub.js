function bottomUpLongestCommonSub(S1, S2) {
    const m = S1.length;
    const n = S2.length;

    // Initializing a matrix of size (m+1)*(n+1)
    const dp = Array.from({length : m + 1},
                          () => Array(n + 1).fill(0));

    // Building dp[m+1][n+1] in bottom-up fashion
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (S1[i - 1] === S2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            }
            else {
                dp[i][j]
                    = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[m][n];
}

function longestCommonSub(s1, s2){
    return bottomUpLongestCommonSub(s1, s2);
}

module.exports = {longestCommonSub, }
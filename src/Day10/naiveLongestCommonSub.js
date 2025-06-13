
function naiveLongestCommonSub(s1, s2, m, n){

    if(m === 0 || n== 0) return 0;

    if(s1[m-1] === s2[n-1])
        return 1 + naiveLongestCommonSub(s1, s2, m-1, n-1);
    else{
        return Math.max(naiveLongestCommonSub(s1, s2, m, n-1), naiveLongestCommonSub(s1, s2, n, m-1));
    }
}
    


function longestCommonSub(s1, s2, m, n){
    return naiveLongestCommonSub(s1, s2, m, n);

}

module.exports = {longestCommonSub,}
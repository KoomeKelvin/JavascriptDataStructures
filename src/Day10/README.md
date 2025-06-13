## In Day 10 We Looked at

- How to solve the **Longest Common Subsequence (LCS)** problem using different strategies.  
- Why the **naive recursive** approach becomes inefficient for large inputs.  
- How **memoization** drastically improves performance with top-down caching.  
- How the **bottom-up dynamic programming** solution avoids recursion altogether.  
- A comparison of **time and space complexity** between the three methods.

---

## Why the Naive Recursive Approach is Simple but Slow

The *naive LCS solution* uses plain recursion:

- It compares the last characters of two strings:
  - If they match, adds `1` and recurses on the remaining substrings.
  - If not, recurses on two possibilities and takes the max.
- This results in **overlapping subproblems** and **exponential time** complexity.

```python
def lcs_naive(X, Y, m, n):
    if m == 0 or n == 0:
        return 0
    elif X[m - 1] == Y[n - 1]:
        return 1 + lcs_naive(X, Y, m - 1, n - 1)
    else:
        return max(lcs_naive(X, Y, m, n - 1), lcs_naive(X, Y, m - 1, n))
Time Complexity: O(2^n) in the worst case.
Space Complexity: O(n) due to recursion stack.

Best used for small inputs or educational purposes.

Why Memoization Makes Recursive LCS Practical
Memoization improves the naive approach by caching results:

Stores results of subproblems in a matrix (or dict).

Avoids recalculating overlapping subproblems.

Still uses recursion but now has polynomial time complexity.

python
Copy
Edit
def lcs_memo(X, Y):
    m, n = len(X), len(Y)
    memo = [[-1] * (n + 1) for _ in range(m + 1)]

    def dp(i, j):
        if i == 0 or j == 0:
            return 0
        if memo[i][j] != -1:
            return memo[i][j]
        if X[i - 1] == Y[j - 1]:
            memo[i][j] = 1 + dp(i - 1, j - 1)
        else:
            memo[i][j] = max(dp(i - 1, j), dp(i, j - 1))
        return memo[i][j]

    return dp(m, n)
Time Complexity: O(m × n)
Space Complexity: O(m × n) for memo table and stack

Great for moderate input sizes or if you prefer a top-down approach.

Why Bottom-Up Dynamic Programming Is the Most Efficient
The bottom-up approach builds the solution iteratively:

Fills a 2D table where each cell stores the LCS of substrings.

Eliminates recursion and uses nested loops.

Ensures maximum performance and predictable memory usage.

Best for large inputs or production-grade performance.

TAKE AWAYS
Naive recursion is conceptually simple but impractical.

Memoization adds major speed improvements with minimal changes.

Bottom-up is fastest and most space-efficient in practice.

Quick Tips
Use naive LCS only for very small inputs or to teach recursion.

Use memoization if you want easier debugging and recursive logic.

Use bottom-up for best performance and when memory use matters.












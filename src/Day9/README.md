## In Day Nine We Looked at

- How the **Sieve of Eratosthenes** finds all prime numbers up to `n` efficiently.  
- Why simple **primality testing** is slower for large ranges.  
- A comparison of **time and space complexity** between the two methods.  
- When to use **sieve** vs. **checking primes individually**.

---

## Why Sieve of Eratosthenes is Efficient for Generating Prime Numbers

The *Sieve of Eratosthenes* works by:

- Creating a boolean array from `2` to `n`, all marked `true`.
- Starting from the first prime `p = 2`, and marking all multiples of `p` as `false`.
- Continuing up to `√n`, skipping already marked (composite) numbers.

This approach is extremely **fast for generating all primes ≤ n**, with a time complexity of **O(n log log n)**. It's best used when:

- You need **all prime numbers** up to a limit.
- The value of `n` is **relatively large** (e.g., up to 10⁶ or more).
- You want a **precomputed list** of primes for repeated use.

---

## Why Basic Primality Test is Slower but More Flexible

A simple *primality test* checks a single number by dividing it with all numbers from `2` up to `√n`. It works for **one number at a time**, and has time complexity **O(√n)** per number. It's best used when:

- You need to **check if one number is prime**, not generate a list.
- You're working with **very large numbers** (e.g., 64-bit integers).
- The list of numbers is **sparse or unknown in advance**.

---

### TAKE AWAYS

- **Sieve is ideal for generating all primes ≤ n in one go.**
- **Primality testing is better for one-off prime checks.**
- **Sieve is faster overall, but uses more space.**

---

### Quick Tips

- **Use the Sieve of Eratosthenes when you need many primes at once.**  
- **Use primality testing for individual large-number checks.**  


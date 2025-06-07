## In Day Seven We Looked at

- Why Counting Sort is ideal for small integer ranges.
- Why Radix Sort is fast for fixed-length integers or strings.
- Why Bucket Sort is efficient for uniformly distributed data.
- Why External Sort is used when data is too large for memory.
- The space-time trade-offs for non-comparison-based sorting.

---

## Why Counting Sort is ideal for small integer ranges.

*Counting Sort* works by **counting the occurrences** of each element and using this count to build the sorted array. It is **not comparison-based**, allowing **O(n + k)** time complexity, where `k` is the range of input values. It’s **stable** and very fast when `k` is not significantly greater than `n`. However, it uses **O(k)** extra space, so it’s impractical for large ranges or floating-point numbers.

---

## Why Radix Sort is fast for fixed-length integers or strings.

*Radix Sort* sorts elements **digit by digit**, using a stable sort like Counting Sort as a subroutine. It works well for integers or strings with **fixed length or bounded digits**. Its time complexity is **O(d·(n + k))**, where `d` is the number of digits and `k` is the base (e.g., 10 for decimals). Radix Sort is **stable** and can outperform comparison sorts in specific domains, but it requires **extra space** and is best for fixed-format data.

---

## Why Bucket Sort is efficient for uniformly distributed data.

*Bucket Sort* divides the input into **buckets**, sorts each bucket (often with Insertion Sort), and concatenates the results. It achieves **O(n + k)** average-case time when elements are **evenly distributed** across the range. It is **not stable by default**, but can be made stable if the sub-sorts are stable. Its performance heavily depends on the data distribution and number of buckets, and it also requires **additional space** for the buckets.

---

## Why External Sort is used when data is too large for memory.

*External Sort* is designed for sorting data that **cannot fit entirely into RAM**—commonly used in databases and big data systems. It divides data into **sorted runs** that fit in memory, then merges them using a **k-way merge algorithm** (e.g., with a min-heap). While its time complexity is **O(n log n)**, it is optimized for **I/O efficiency** rather than CPU time. It is **not in-place** and needs disk storage and additional memory buffers for merging.

---

### TAKE AWAYS

- **Counting Sort is extremely fast but only useful when the value range is small and known.**
- **Radix Sort beats comparison sorts for fixed-length keys but relies on stable sub-sorting and extra memory.**
- **Bucket Sort can be very fast for evenly distributed input but is sensitive to data distribution.**
- **External Sort is essential when working with data larger than RAM and is optimized for disk I/O, not just CPU speed.**

---

### Quick Tips

- **Use Counting Sort when sorting small integers with a known value range.**
- **Use Radix Sort for large datasets of fixed-size integers or strings.**
- **Use Bucket Sort for floating-point numbers that are uniformly distributed.**
- **Use External Sort when handling massive files that don’t fit in memory.**

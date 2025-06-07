## In Day Eight We Looked at

- Why Linear Search is simple but inefficient for large data.
- Why Binary Search is fast but only works on sorted data.
- The differences in time complexity between the two.
- The use cases where each method is appropriate.

---

## Why Linear Search is simple but inefficient for large data.

*Linear Search* checks each element **one by one** until it finds the target or reaches the end. It is extremely **simple to implement** and works on **unsorted data**, but it is **slow for large datasets**. Its worst-case time complexity is **O(n)**, where `n` is the number of elements. Linear Search is best when:

- The dataset is **small**.
- The data is **unsorted**.
- Simplicity is more important than speed.

---

## Why Binary Search is fast but only works on sorted data.

*Binary Search* repeatedly **divides the search range in half** and compares the middle element to the target. It is **much faster** than Linear Search with a time complexity of **O(log n)**, but it only works on **sorted arrays**. Binary Search is best when:

- The dataset is **large**.
- The data is already **sorted**.
- Speed is critical and a log-scale performance improvement is needed.

---

### TAKE AWAYS

- **Linear Search is easy and flexible but slow for big data.**
- **Binary Search is fast but needs sorted input to work correctly.**
- **Choose the right method based on the data size and whether it’s sorted.**

---

### Quick Tips

- **Use Linear Search for unsorted or small datasets.**
- **Use Binary Search for large, sorted datasets where performance matters.**

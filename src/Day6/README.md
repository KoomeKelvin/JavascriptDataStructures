## In Day Six We Looked at

- Why Quick Sort is generally preferred for in-place sorting.
- Why Merge Sort is stable but uses more memory.
- Why Heap Sort guarantees O(n log n) time but can be slower in practice.
- Why Insertion Sort is efficient for small or nearly sorted datasets.
- The trade-offs between time and space complexity for each sorting algorithm.

---

## Why Quick Sort is generally preferred for in-place sorting.
* Quick Sort is a **divide-and-conquer** algorithm that picks a pivot and partitions the array around it. Its **average time complexity is O(n log n)**, but its **worst-case time is O(n²)** (usually avoided with good pivot choice). It is **in-place**, using **O(log n)** space due to recursion stack.

---

## Why Merge Sort is stable but uses more memory.
* Merge Sort is also a divide-and-conquer algorithm and guarantees **O(n log n)** time in both average and worst cases. It is **stable**, meaning it preserves the relative order of equal elements, but it requires **O(n)** extra space to merge arrays.

---

## Why Heap Sort guarantees O(n log n) time but can be slower in practice.
* Heap Sort builds a max-heap and repeatedly extracts the maximum element. It has **O(n log n)** time complexity for all cases and uses **O(1)** space (in-place), but it is **not stable** and can be **slower than Quick Sort** due to more comparisons and swaps.

---

## Why Insertion Sort is efficient for small or nearly sorted datasets.
* Insertion Sort works by building a sorted section one item at a time. It has a **worst-case time of O(n²)** but performs **O(n)** in best case (nearly sorted input). It is **in-place and stable**, using only **O(1)** space. Ideal for small arrays or as part of hybrid sorting.

---

### TAKE AWAYS

- **Quick Sort is the fastest on average but requires careful pivot selection to avoid O(n²) worst case.**
- **Merge Sort guarantees consistent O(n log n) time and is stable but uses extra memory.**
- **Heap Sort ensures O(n log n) time without extra space but is not stable and often slower in practice.**
- **Insertion Sort is best for small arrays and nearly sorted data due to its low overhead.**

---

### Quick Tips

- **Use Merge Sort when stability matters and memory isn't a constraint.**
- **Use Quick Sort for general-purpose in-memory sorting when average speed is critical.**
- **Use Insertion Sort for sorting small or mostly sorted data efficiently.**

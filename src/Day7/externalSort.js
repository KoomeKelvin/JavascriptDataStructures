class MinHeapNode{
    constructor(element, i){
        this.element = element;
        this.i = i;
    }

}

class MinHeap{ // keeps smallest node on top
    constructor(){
        this.heap = [];
    }
    parent(i){
        return Math.floor((i-1)/2);
    }
    leftChild(i){
        return 2*i+1;
    }
    rightChild(i){
        return 2*i+2;
    }
    insert(node){
        this.heap.push(node);
        this.heapifyUp(this.heap.length - 1);
    }

    remove(){
        if(this.isEmpty()){
            return null;
        }
    
        const minNode = this.heap[0];
        this.heap[0] = this.heap[this.heap.length -1];
        this.heap.pop();
        this.heapifyDown(0);
        return minNode;
    }
    
    isEmpty(){
        return this.heap.length === 0;
    }

    heapifyUp(i){
        while(i > 0 && this.heap[i].element < this.heap[this.parent(i)].element){
            [this.heap[i], this.heap[this.parent(i)]] = [this.heap[this.parent(i)], this.heap[i]];
            i= this.parent(i);

        }
    }
    
    heapifyDown(i){
        let midIndex = i;
        const left = this.leftChild(i);
        const right = this.rightChild(i);
        if (left < this.heap.length && this.heap[left].element < this.heap[midIndex].element){
            midIndex = left;
        }
        if(right < this.heap.length && this.heap[right].element < this.heap[midIndex].element){
            midIndex = right;
        }
        if(midIndex !== i){
            [this.heap[i], this.heap[midIndex]] = [this.heap[midIndex], this.heap[i]];
            this.heapifyDown(midIndex);
        }
    }
}


/**
 * mergeArrays(arrs) merges partitions by comparing smallest no in chunk.
 * 
 * @param {array} arrs subdivided array partitions
 * @returns {array} merged array.
 */

function mergeArrays(arrs){
    const k = arrs.length;
    const output = [];
    const minHeap = new MinHeap();

    for(let i=0; i < k; i++){
        if(arrs[i].length > 0){
        minHeap.insert(new MinHeapNode(arrs[i][0], i));
        arrs[i].shift();
        }  
    }
    while(!minHeap.isEmpty()){
        const root = minHeap.remove();
        output.push(root.element);
        if(arrs[root.i].length > 0){
            minHeap.insert(new MinHeapNode(
                arrs[root.i][0], root.i));
                arrs[root.i].shift();
            }

        }
        return output;
    }
/**
 * createInitialRuns creates array chunks
 * 
 * @param {array} arr
 * @param {number} numWays partitions 
 * @param {number} runSize partitions size
 * 
 */
function createInitialRuns(arr, numWays, runSize){
    const initialRuns = [];

    // subdivide array into chunks and sort them
    for (let i = 0; i<numWays; i++){
        const run = arr.slice(i*runSize, (i+1)*runSize).sort((a, b) => a -b);
        initialRuns.push(run);
    }
    return initialRuns;
}

/**
 * externalSort(arr, numWays, runSize) processes data
 * 
 * @param {array} arr array to sort
 * @param {number} numWays partitions 
 * @param {number} runSize partition size. 
 * 
 */
function externalSort(arr, numWays, runSize){
    const initialRuns = createInitialRuns(arr, numWays, runSize);
    const sortedData = mergeArrays(initialRuns);
    return sortedData;
}


/**
 * 
 * @param {array} arr array to sort
 * @param {number} numWays number of partitions
 * @param {number} runSize number of elements per partition.
 */
function sortArray(arr, numWays, runSize){
    return externalSort(arr, numWays, runSize);
}

module.exports = {sortArray,}
const {addQueueElement, processQueue, nextItemToProcessInQueue, numberOfElementsInQueue} = require('../queue.js');

class Queue{
    constructor()
    {
        this.queueData = {};
        this.tail = 0;
        this.head = 0;
    }

    enqueue(data){
        this.queueData[this.tail] = data;
        this.tail++;  
    }

    dequeue()
    {
        if (this.isEmpty()) return undefined;

        const element = this.queueData[this.head];
        delete this.queueData[this.head];
        this.head++;
        return element;
    }

    queuedElements()
    {
        return this.tail - this.head;
    }
    peek()
    {
       if (this.isEmpty()) return undefined;
        return this.queueData[this.head];
    }

    isEmpty(){
        return this.head === this.tail;
    }
}

let elementToAdd;
beforeEach(()=>{
    taskQueue = new Queue();
});

test('it number of elements inqueue', ()=>{
    elementToAdd= 20;
    addQueueElement(taskQueue, elementToAdd)
    expect(numberOfElementsInQueue(taskQueue)).toEqual(1);
});

test('it adds an element to the queue', ()=>{
    elementToAdd= 20;
    addQueueElement(taskQueue, elementToAdd)
    expect(taskQueue.queuedElements()).toEqual(1);
});

test('it adds queue elements', ()=>{
   addQueueElement(taskQueue, 30);
   addQueueElement(taskQueue, 40);
   addQueueElement(taskQueue, 50);
   expect(taskQueue.queuedElements()).toEqual(3);
});

test('it process a queue element', () =>{
    addQueueElement(taskQueue, 30);
    addQueueElement(taskQueue, 40);
    addQueueElement(taskQueue, 50);
    expect(processQueue(taskQueue)).toBe("Task 30 processed");
});

test('Next item to be processed', () =>{
    addQueueElement(taskQueue, 30);
    addQueueElement(taskQueue, 40);
    addQueueElement(taskQueue, 50);
    expect(nextItemToProcessInQueue(taskQueue)).toBe(30);
});






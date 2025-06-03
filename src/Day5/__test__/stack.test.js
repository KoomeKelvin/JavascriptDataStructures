const {pushToStack, popFromStack, peekFromStack,} = require('../stack.js');

let stackInstance;

class Stack{

    constructor(){
        this.data = {};
        this.head = 0;
    }

    pushStack(value){
        this.data[this.head] = value;
        this.head++;
        return value;
    }
    popStack(){
        if(this.isEmpty()) return undefined;
        const poppedValue = this.data[this.head-1];
        delete this.data[this.head-1];
        this.head--;
        return poppedValue;
    }
    peekStack(){
        if(this.isEmpty()) return undefined;
        return this.data[this.head-1];
    }
    stackHeight(){
        return this.head;
    }
    isEmpty(){
        return this.head === 0;
    }
}

beforeEach(()=>{
    stackInstance = new Stack();
});

test('push items to the stack', ()=>{
    pushToStack(stackInstance, 20);
    pushToStack(stackInstance, 30);
    expect(stackInstance.stackHeight()).toBe(2);
});

test('peek check top most element in stack', ()=>{
    pushToStack(stackInstance, 20);
    pushToStack(stackInstance, 30);
    expect(stackInstance.stackHeight()).toBe(2);
    expect(peekFromStack(stackInstance)).toBe(30);
});

test('pop/ remove item from the stack', ()=>{
    pushToStack(stackInstance, 20);
    pushToStack(stackInstance, 30);
    expect(stackInstance.stackHeight()).toBe(2);
    expect(popFromStack(stackInstance)).toBe(30);
    expect(stackInstance.stackHeight()).toBe(1);
});

test('test empty stack returns undefined for pop and peek operations', ()=>{
    expect(popFromStack(stackInstance)).toBe(undefined);
    expect(peekFromStack(stackInstance)).toBe(undefined);
});





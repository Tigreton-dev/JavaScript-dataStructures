class Queue {
    // Array is used to implement a Queue
    constructor() {
        this.items = [];
    }
      
    // adding element to the queue
    enqueue(element){    
        this.items.push(element);
    }

    // removing element from the queue returns underflow when called on empty queue
    dequeue() {
        if(this.isEmpty()) return "Underflow";
        return this.items.shift();
    }

    // returns the Front element of the queue without removing it.
    front() {
        if(this.isEmpty()) return "No elements in Queue";
        return this.items[0];
    }

    // return true if the queue is empty.
    isEmpty() {
        return this.items.length == 0;
    }

    printQueue() {
        var str = "";
        for(var i = 0; i < this.items.length; i++)
            str += this.items[i] +" ";
        return str;
    }
}

var queue = new Queue();
console.log(queue.dequeue());
console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.enqueue(60);
console.log(queue.front());
console.log(queue.dequeue());
console.log(queue.front());
console.log(queue.dequeue());
console.log(queue.printQueue());
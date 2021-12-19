//https://www.geeksforgeeks.org/top-20-linked-list-interview-question/

/*
Linked list is a linear data structure in which elements are not in contiguous 
memory locations like arrays. It consists of a group of nodes and each node has 
its own data and address to the next node. In an array, the elements are indexed 
and you can instantly get to an element but in a linked list, you have to start 
with the head and work your way through until you get to the desired element.

The advantage of the linked list is that the insertion and deletion in linked 
list are easier than array, as the elements in an array are stored in a consecutive 
location so linked list have insertion and deletion in constant time O(1). Also, 
its memory consumption is efficient as the size of the linked list can grow or 
shrink according to our requirements.

but linke list have lienar acces to a data O(n)
*/
class Node {
    constructor(data) {
        this.data = data
        this.next = null;
    }
}
class LinkedList {
    constructor(head = null) {
        this.head = head;
        this.tail = null;
    }

    // Add a node in the end
    add(value) {
        let node = new Node(value);
        // if list is empty
        if (!this.head) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
    }

    // Add a node in the beginning
    addFirst(value) {
        let node = new Node(value);
        node.next = this.head;
        this.head = node;
    }

    // Remove a node from the end
    pop() {
        let currentList = this.head;
        if (!this.head) return;
        if (this.head.next === null) {
            this.head = null;
            this.tail = null;
        } else{
            while (currentList.next.next) {
                currentList = currentList.next;
            }
            this.tail = currentList;
            this.tail.next = null;
        }
    }

    // Remove a node from the beginning
    popFirst() {
        if (this.head && this.head.next) {
            this.head = this.head.next;
        } else this.head = null;
    }

    // Return the first node
    getFirst() {
        return this.head;
    }

    // Return the last node
    getLast() {
        return this.tail;
    }

    // Remove Node at specific point from the list
    removeAt(index) {
        if (index === 0) this.popFirst();
        let i = 0;
        let currentList = this.head;
        let prevList = null;
        while (!currentList) {
            if (i === index) {
                prevList.next = currentList.next;
                currentList = null;
            } else {
                prevList = currentList;
                currentList = currentList.next;
                i++;
            }
        }
    }

    // Insert Node at specific point from the list
    insertAt(index, data) {
        if (index === 0) this.addFirst(data);
        let i = 0;
        let currentList = this.head;
        while (!currentList) {
            if (i === index - 1) {
                const node = new Node(data);
                node.next = currentList.next;
                currentList.next = node;
            }else {
                i++;
                currentList = currentList.next;
            }
        }
    }

    // Combert linked list values into array
    _toArray() {
        let arr = [];
        let cur = this.head;
        while (cur) {
            arr.push(cur.data);
            cur = cur.next;
        }

        return arr;
    }

    removeDup() {
        const list = new Set();
        let currentList = this.head;
        let prevList = null;
        while(currentList) {
            if (!list.has(currentList.data)) {
                list.add(currentList.data);
                prevList = currentList;
                currentList = currentList.next;
            } else {
                let elem = currentList; 
                prevList.next = currentList.next;
                currentList = currentList.next;
                elem.next = null;
            }
        }
    }

    findKTH(k) {
        // do iteratively
        //define two pointers , fast and slow pointer
        let fast = this.head
        let slow = this.head
        //Move fast pointer k steps in the linkedlist while slow remains at head
        for(let i=0;i<k;i++){
            if(fast === null) return null //k is larger than length of linked list
            fast = fast.next
        }
        // move both pointers at the same time, slow pointer will exit at kth node from the end
        while(fast !== null){
            fast =fast.next
            slow=slow.next
        }
        return slow
    }

    partition(num) {
        let currentList = this.head;
        let prevList = null;
        while(currentList) {
            if (currentList.data < num) {
                if(prevList === null) {
                    prevList = currentList;
                    currentList = currentList.next;
                } else {
                    const val = currentList.next;
                    prevList.next = currentList.next;
                    currentList.next = this.head;
                    this.head = currentList;
                    currentList = val;
                }
            } else {
                prevList = currentList;
                currentList = currentList.next;
            }
        }
    }

    isPalindrome(head) {
        var slow = head;
        var ispalin = true;
        var stack = [];
        // Traverse the given list from head to tail and push every visited node to stack.
        while (slow != null) {
            stack.push(slow.data);
            slow = slow.next;
        }
        // Traverse the list again. 
        // For every visited node, pop a node from the stack and compare data of popped node with the currently visited node
        while (head != null) {
            var i = stack.pop();
            if (head.data == i) {
                ispalin = true;
            } else {
                ispalin = false;
                break;
            }
            head = head.next;
        }
        return ispalin;
    }

    intersection(head1, head2) {
        var peek = function(stack) {
            return stack[stack.length - 1];
        };
        var stack1 = [];
        var stack2 = [];
        while (head1 !== null) {
          stack1.push(head1);
          head1 = head1.next;
        }
        while (head2 !== null) {
          stack2.push(head2);
          head2 = head2.next;
        }
        if (stack1.length === 0 || stack2.length === 0) {
            return undefined;
        } else if (peek(stack1) !== peek(stack2)) {
            return undefined;
        } else {
            var intersect;
            while (peek(stack1) === peek(stack2)) {
                intersect = peek(stack1);
                stack1.pop();
                stack2.pop();
            }
            return intersect;
        }
    };
}

let l = new LinkedList();
l.add(1);
l.add(2);
l.add(3);
l.add(4);
l.add(5);
l.addFirst(6);
l.pop();       // Remove a node from the end
l.popFirst();  // Remove a node from the beginning
l.getFirst();  // Return the first node
l.getLast();   // Return the last node
l.removeAt(1); // Remove Node at specific point from the list
l.insertAt(1, 1); // Insert Node at specific point from the list
l._toArray();  // Combert linked list values into array

let list = new LinkedList();
for (let elem of [1, 5, 1, 6, 8, 6, 8, 8, 8, 8]) {
  list.add(elem);
}
list.removeDup();
list._toArray();

let list2 = new LinkedList();
for (let elem of [1, 2, 3, 4, 5]) {
    list2.add(elem);
}
console.log(list2.findKTH(3));
console.log(list2.findKTH(10));
console.log(list2.findKTH(-1));
console.log(list2.findKTH(0));
console.log(list2.findKTH(1));

let list3 = new LinkedList();
for (let elem of [1, 2, 7, 8, 1, 6, 3, 4, 5, 6, 6, 3, 4, 7, 2, 9, 8, 1, 10]) {
    list3.add(elem);
}
list3.partition(5);
list3._toArray();




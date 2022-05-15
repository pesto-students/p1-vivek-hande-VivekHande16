class Node {
    //Add new Node
    constructor(data, next=null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null,
        this.size = 0;
    }
   
    //Insert the nodes
    insert(data) {
        let node = new Node(data);
        let current;

        //Insert at first position i.e. head
        if(this.head == null) 
            this.head = node;
        //Insert at other positions
        else {
            current = this.head;
            while(current.next) 
                current = current.next;
            current.next = node;
        }
        //Increase the size after adding new Node
        this.size++;
    }

    detectLoop(x) {
        let prevVal = x-1;
        let nextVal = x+1;
        let current =  this.head;
        while(current.next.next) {
        //If the x points to the value present in linked list then return true
            if(current.data == x) return true;
        //If x-1 and x+1 values are there in linked list and x value is given then return true
            if(current.data == prevVal && current.next.data == nextVal) return true;
            current = current.next;    
        }
        return false;
    }
    
    //Print list data
    printListData() {
        const arr = [];
        let current = this.head;
        while(current) {
            arr.push(current.data, '->');
            current = current.next;
        }
        arr.push(null);
        return arr;
    }
}

const ll = new LinkedList();
const arr = [1,2,3,4,5];
arr.forEach(element => ll.insert(element));

const x = 0;
const bool = ll.detectLoop(x);
console.log(bool);
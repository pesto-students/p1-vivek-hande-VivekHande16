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

    //Reverse the list
    reverse() {
    let current = this.head;
    let previous = null;
    let temp;
    
    /* 
    assign next element to temp and then assign the current's next to previous
    then make previous as current and then make current as next element to reverse a linked list
    */
    while(current) {
        temp = current.next;
        current.next = previous;
        previous = current;
        current = temp;
        }
        this.head = previous;
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

let result;
console.log("Linked list");
result = ll.printListData();
console.log(...result);

ll.reverse();
console.log("LinkedList after reversing the direction");
result = ll.printListData();
console.log(...result);

console.log({"LinkedList after reversing the direction": result});
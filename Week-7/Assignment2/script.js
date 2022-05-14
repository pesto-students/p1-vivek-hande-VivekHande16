class Node {
    //Add new node
    constructor(data, next=null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    /* Insert the nodes */
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
        //Increase the size after add the new node
        this.size++;
    }

    rotateFromIndex(index){
        //If k value is bigger then return the same linked list
        if(index > this.size) 
            console.log( "K value is bigger tha linked list size. So cannot rotate");
        else {
            let current = this.head;
            let count = 0;
        //Iterate till the last node
            while(current.next) {
                current = current.next;
            }
        //Make last node as head node
            current.next = this.head;
        //Iterate till index   
            while(count < index) {
                current = current.next;
                count++;
            }
        //Make index as head node
            this.head = current.next;
            current.next = null;
        }
    }

    // Storing linked list elements in array 
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

console.log("Linked list");
let result = ll.printListData();
console.log(...result);

console.log("After rotation linked list is");
ll.rotateFromIndex(2);
result = ll.printListData();
console.log(...result);
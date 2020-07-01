const LinkedList = require('../Linked_List/Single/LL');


module.exports = class Stack {
    constructor() {
        this.size = 0;
        this.stack = new LinkedList();     
    }

    pop() {
        const { stack, size } = this;
        let top = stack.removeFromHead();
        try {
            top = top.val;
        } catch (err) {
            //do nothing, not a bad error, just have to handle it
        }
        if (size) this.size--;
        return top;
    }

    push(val) {
        const { stack } = this;
        stack.addToHead(val);
        this.size++;
    }

    peek() {
        
    }
}
const LinkedList = require('../Linked_List/Single/LL');

/**
 * Stack data structure
 * storage:
 *  this._stack {LinkedList<any>} : private storage container which accepts any data type as valid input to add to the list
 * this._size {int} :  private count tracking how many items are in the stack
 * 
 * methods:
 *  pop() {<any>} : returns the top item off the stack, or null
 *  push(val) {void} : adds the item to the stack as the top item, if val is defined, otherwise does nothing
 *  peek() {<any>} : reveals and returns the top value of the stack, if any, returns null if nothing on the stack
 *  length() {<int>}: returns the current _size of the stack
 */
module.exports = class Stack {
    constructor() {
        this._size = 0;
        this._stack = new LinkedList();     
    }

    pop() {
        const { _stack, _size } = this;
        let top = _stack.removeFromHead();
        try {
            top = top.val;
        } catch (err) {
            //do nothing, not a bad error, just have to handle it
        }
        if (_size) this._size--;
        return top;
    }

    push(val) {
        if (val === undefined) return;
        
        const { _stack } = this;
        _stack.addToHead(val);
        this._size++;
    }

    peek() {
        try {
            const { _stack } = this;
            const top = _stack.head.val;
            return top;
        } catch (err) {
            return null;
        }
    }

    length() {
        return this._size;
    }
}
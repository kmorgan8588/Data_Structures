const List = require('../Linked_List/Double/LL');

/**
 * Queue data structure, implemented using a Doubly Linked List.  For more information on the Doubly Linked List, visit 'Linked_List/Double/LL.js'
 * fields:
 *  _queue {LinkedList{any}}: storage for any items added to the queue object, new items are added to the end, and old one are removed from the front
 *  _size {int} : tracks the current size of the queue as an integer 
 * 
 * methods:
 *  enqueue(val) {void}: takes the val and adds it to the end of the queue, if val isn't defined, do nothing
 *  dequeue() {any}: removes the first item from the queue, if it exists, and returns it, returns null otherwise
 *  peek() {any}: returns the first item from the queue, if it exists
 *  length() {int}: returns the _size field
 */

module.exports = class Queue {
    constructor(){
        this._size = 0;
        this._queue = new List();
    }

    dequeue() {
        let result = null;
        if (this._size) {
            try {
                result = this._queue.removeFromHead().val;
                this._size--;
            }
            catch(err) {
                result = null;
            }
        }
        return result;
    }

    enqueue(val = undefined) {
        if (val) {
            this._size++;
            this._queue.addToTail(val);
        }
    }

    peek() {
        let result;
        try {
            result = this._queue.front().val;
            
        } 
        catch(err) {
            result = null;
        }
        return result;
    }

    length() {
        return this._size;
    }
}
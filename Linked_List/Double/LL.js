const Node = require('../Node/NodeQ');

/**
 * Constructed for the purpose of interfacing as data storage for the Queue data structure
 * Emphasis being place on quick insertion and removal from the head
 * Constructor()
 * val {int}: - provided at instatiation, if no value is included, head and tail are set to null
 * this.head {node}: - see Node/NodeQ.js for more information, contains the node at the front of the list or null
 * this.tail {node}: - see Node/NodeQ.js for more information, contains the node at the back of the list or null
 * 
 * Methods
 * addToTail(val) {function}: - replaces the tail node and attaches the previous tail to the next attribute, if no tail exists, the head is also set to the new Node
 * removeFromTail() {function}: - removes the tail node from the list and moves it to the prev node in the list, if there is no prev node, the head is also set to null
 * reset() {function}: - clean slate, clears and resets head, tail to null
 */

module.exports = class LinkedList {
    constructor(val = null) {
        if (val) {
            const node = new Node(val);
            this.head = node;
            this.tail = node;
        } else {
            this.head = val;
            this.tail = val;
        }
    }

    addToTail(val) {
        const node = new Node(val);
        if (this.tail) {
            node.prev = this.tail;
            this.tail.next = node;
        } else {
            this.head = node;
        }
        this.tail = node;
    }

    removeFromHead() {
        let result = null;
        try {
            result = this.head;
            this.head = result.next;
            if (!this.head) throw new Error('head was null');
            this.head.prev = null;
        }
        catch(err) {
            this.head = null;
            this.tail = null;
        }
        finally {
            return result;
        }
    }

    front() {
        return this.head;
    }

    reset() {
        this.head = null;
        this.tail = null;
    }
};
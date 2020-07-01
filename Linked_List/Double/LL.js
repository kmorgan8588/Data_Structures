const Node = require('../Node/NodeQ');

/**
 * Constructed for the purpose of interfacing as data storage for the Queue data structure
 * Emphasis being place on quick insertion and removal from the tail
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
        } else {
            this.head = node;
        }
        this.tail = node;
    }

    removeFromTail() {
        let result = null;
        try {
            result = this.tail;
            this.tail = result.prev;
            if (!this.tail) throw new Error('tail was null');
        }
        catch(err) {
            this.head = null;
            this.tail = null;
        }
        finally {
            return result;
        }
    }

    reset() {
        this.head = null;
        this.tail = null;
    }
};

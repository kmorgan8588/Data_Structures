const Node = require('../Node/Node');

/**
 * Constructed for the purpose of interfacing as data storage for the Stack data structure
 * Emphasis being place on quick insertion and removal from the head
 * Constructor()
 * val {int}: - provided at instatiation, if no value is included, head and tail are set to null
 * this.head {node}: - see Node/Node.js for more information, contains the node at the front of the list or null
 * this.tail {node}: - see Node/Node.js for more information, contains the node at the back of the list or null
 * 
 * Methods
 * addToHead(val) {function}: - replaces the head node and attaches the previous head to the next attribute, if no head exists, the tail is also set to the new Node
 * removeFromHead() {function}: - removes the head node from the list and moves it to the next node in the list, if there is no next node, the tail is also set to null
 * 
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

    addToHead(val) {
        const node = new Node(val);
        if (this.head) {
            node.next = this.head;
        } else {
            this.tail = node;
        }
        this.head = node;
    }
};

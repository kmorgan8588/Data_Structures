/**
 * Node data structure for use with the singly LinkedList class
 * val {any} : - during construction, if the val is not specified, it is defaulted to null
 * next {null} : - to be set at a later point to reference another node object
 */


module.exports = class Node {
    constructor (val = null) {
        this.val = val;
        this.next = null;
    }
};

/**
 * Basic Heap class for use with creating Min and Max Heap classes
 * Heaps are a complete tree data structure where new values are filled in from left to right,
 * always filling a depth before a new level begin filling
 * 
 * This basic implementation follows having an array which contains the 'tree'.  The children of any element are
 * based on the index of the parent. 
 * EG: curr index === 1, the children will be: left - 3, right - 4
 * The formula describing this is Left = 2*index + 1, Right = 2*index + 2
 * To determine the parent of an index, we follow the formula: parent = Math.floor((currIndex - 1) /2 );
 * EG: 4 - 1 = 3, 3/2 = 1.5, floor(1.5) = 1         3 - 1 = 2, 2/2 = 1, floor(1) = 1
 * 
 * These formulas will be important in the bubbleUp, and bubbleDown methods
 * 
 * 
 * fields: 
 *  - size {int} : current number of elements in the heap
 *  - heap {array} : an array of all the elements in the heap, ordered by the formulas given above
 * 
 * methods:
 * public:
 *  - add(val) {void} val{int} : places a new value in to the heap and calls heapifyUp, no return value
 *  - remove() {int} : returns the top value from the heap, and ensures the heap maintains its structure by calling heapifyDown
 *  - top() {int} : returns the value of top element of the heap
 *  - length() {int} : return the current size of the heap
 * private: 
 * - heapifyUp(config) {void} config{object} : run with add, to place the new value into the correct position in the heap, config describes how to compare values for placement
 * - heapifyDown(config) {void} config{object} : after removing the top value, we replace it with the last element added to the heap, and push it down to ensure the correct top value is found, config describes how to compare values for placement 
 */

 module.exports = class Heap {
     constructor() {
        this._size = 0;
        this._heap = [];
     }

     length() {
         return this._size;
     }
 }
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
 *  - add(val) {void} val{int} : places a new value in to the heap, no return value
 *  - remove() {int} : returns the top value from the heap
 *  - top() {int} : returns the value of top element of the heap
 *  - length() {int} : return the current size of the heap
*/

 module.exports = class Heap {
     constructor() {
        this._size = 0;
        this._heap = [];
     }

     add(val) {
         if (val !== undefined) {
             this._heap.push(val);
             //call heapifyUp
             this._size++;
         }
     }

     length() {
         return this._size;
     }

     remove() {
        let top = null;
         if (this._size > 1) {
             //swap first and last
             [this._heap[0], this._heap[this._size-1]] = [this._heap[this._size - 1], this._heap[0]];

         }
         this._size ? top = this._heap.pop() : top;
         this._size ? this._size-- : this._size;
         return top;
     }

     top() {
         return this._size ? this._heap[0] : null;
     }
 }
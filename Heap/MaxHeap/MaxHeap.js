const Heap = require('../Base/Heap');

/**
 * Max Heap classes
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
 * private: 
 * - heapifyUp() {void} : run with add, to place the new value into the correct position in the heap, moving larger values to the top of the heap
 * - heapifyDown() {void} : after removing the top value, we replace it with the last element added to the heap, and push it down to ensure the correct top value is found 
 */

 module.exports = class MaxHeap extends Heap {
     constructor() {
         super();
     }

     add(val) {
         super.add(val);
         this.heapifyUp();
     }

     length() {
         return super.length();
     }

     top() {
        return super.top();
     }

     remove() {
         const top = super.remove();
         this.heapifyDown();
         return top;
     }

     heapifyUp() {
        //compare to parent, swap if smaller
        if (!this._size) return;
        let child = this._size - 1;
        let parent = Math.floor((child - 1) / 2);

        while (this._heap[child] > this._heap[parent] && parent >= 0) {
            [this._heap[child], this._heap[parent]] = [this._heap[parent], this._heap[child]];
            child = parent;
            parent = Math.floor((child - 1) / 2);
        }
     }

     heapifyDown() {
        if (!this._size) return;

        let parent = 0;
        let left = 2 * parent + 1, right = 2 * parent + 2;

        while (this._heap[left] !== undefined && (this._heap[parent] < this._heap[left] || this._heap[parent] < this._heap[right])) {
            if (this._heap[left] && this._heap[right] && this._heap[right] <= this._heap[left]) {
                [this._heap[left], this._heap[parent]] = [this._heap[parent], this._heap[left]];
                parent = left;
            } else if (this._heap[left] && this._heap[right] && this._heap[right] > this._heap[left]) {
                [this._heap[right], this._heap[parent]] = [this._heap[parent], this._heap[right]];
                parent = right;
            } else {
                [this._heap[left], this._heap[parent]] = [this._heap[parent], this._heap[left]];
                parent = left;
            }

            left = 2 * parent + 1, right = 2 * parent + 2;
        }
     }
 }
const Heap = require('./MaxHeap');

let heap, size, top, result;

beforeEach(() => heap = new Heap());
afterEach(() => {
    size = undefined;
    top = undefined;
    result = undefined;
})


test('new max heap should initialize with size 0', () => {
    size = heap.length();
    expect(size).toBe(0);
});

test('top should return null from an empty heap', () => {
    top = heap.top();
    expect(top).toBe(null);
});

test('removing from an empty heap should return null', () => {
    expect(heap.remove()).toBe(null);
});

test('adding a new larger value should move that value to top', () => {
    heap.add(45);
    top = heap.top();
    expect(top).toBe(45);
    heap.add(54);
    top = heap.top();
    expect(top).toBe(54);
});

test('removing the largest value should move the next largest to the top', () => {
    for (let i = 2; i < 2**4; i *=2) {
        heap.add(i);
    }
    top = heap.top();
    expect(top).toBe(8);
    heap.remove();
    top = heap.top();
    expect(top).toBe(4);
});

test('removing all elements from the heap should yield a sorted, descending list', () => {
    for (let i = 1; i < 10; i++) {
        heap.add(i**2);
        expect(heap.length()).toBe(i);
    }
    result = [];
    while (heap.length()) {
        result.push(heap.remove());
    }
    expect(result).toEqual([81, 64, 49, 36, 25, 16, 9, 4, 1]);
    size = heap.length();
    expect(size).toBe(0);
});
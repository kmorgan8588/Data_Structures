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
})
const Heap = require('./Heap');

let heap;
let size;

beforeEach(() => heap = new Heap());


test('a new heap with have size 0', () => {
    size = heap.length();
    expect(size).toBe(0);
});

test('adding an element to the heap should increase the size', () => {
    size = heap.length();
    expect(size).toBe(0);
    heap.add(1);
    size = heap.length();
    expect(size).toBe(1);
});

test('removing from an empty heap shouldn\'t decrease the size', () => {
    heap.remove();
    size = heap.length();
    expect(size).toBe(0);
});

test('removing from an empty heap should return null', () => {
    const result = heap.remove();
    expect(result).toBe(null);
});

test('removing from a heap with elements should decrease the size', () => {
    heap.add(1);
    heap.add(3);
    size = heap.length();
    expect(size).toBe(2);
    heap.remove();
    size = heap.length();
    expect(size).toBe(1);
});

test('should remove the top value', () => {
    for (let i = 1; i < 5; i++) {
        heap.add(i);
    }

    const result = heap.remove();
    expect(result).toBe(1);
});

test('top should return null from an empty heap', () => {
    expect(heap.top()).toBe(null);
})

test('top should be the first value in the heap', () => {
    for (let i = 1; i < 5; i++) {
        heap.add(i);
    }

    const top = heap.top();
    expect(top).toBe(1);
});
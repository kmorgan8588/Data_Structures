const Heap = require('./Heap');

let heap;


beforeEach(() => heap = new Heap());


test('a new heap with have size 0', () => {
    const size = heap.length();
    expect(size).toBe(0);
});
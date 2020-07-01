const Queue = require('./Queue');


let queue;


beforeEach(() => queue = new Queue());

test('a fresh queue will have size 0', () => {
    const size = queue.length();
    expect(size).toBe(0);
});

test('should return null when dequeueing an empty queue', () => {
    const front = queue.dequeue();
    expect(front).toBe(null);
});

test('should return null when peeking an empty queue', () => {
    const front = queue.peek();
    expect(front).toBe(null);
});

test('adding an item to the queue should increase the size', () => {
    queue.enqueue(1);
    const size = queue.length();
    expect(size).toBe(1);
});

test('adding multiple items should increase the queue size', () => {
    for (let i = 1; i < 5; i++) {
        queue.enqueue(i);
    }
    const size = queue.length();
    expect(size).toBe(4);
});

test('peek should reveal the first item added to the queue', () => {
    for (let i = 1; i < 16; i *= 2) {
        queue.enqueue(i);
    }
    const front = queue.dequeue();
    expect(front).toBe(1);
});

test('dequeue should remove the items in the same order they went in', () => {
    for (let i = 1; i < 9; i++) {
        queue.enqueue(2*i);
    }

    const exitQueue = [];

    while (queue.length()) {
        exitQueue.push(queue.dequeue());
    }
    const size = queue.length();
    expect(size).toBe(0);
    expect(exitQueue).toEqual([2,4,6,8,10,12,14,16]);
});
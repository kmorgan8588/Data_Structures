const Node = require('./Node');


let node;

beforeEach(() => node = new Node());


test('a newly instantiated node exists', () => {
    const { val, next } = node;
    expect(val).toBe(null);
    expect(next).toBe(null);
})

test('expect node val to match provided value', () => {
    node.val = 5;
    const { val } = node;
    expect(val).toBe(5);
});

test('expect a new node to have the provided value at runtime', () => {
    node = new Node(12);
    const {val} = node;
    expect(val).toBe(12);
});

test('assigning another node to next should contain that nodes value', () => {
    const newNode = new Node(42);
    node.next = newNode;
    expect(newNode.val).toBe(42);
    const { next } = node;
    expect(next.val).toBe(42);
});
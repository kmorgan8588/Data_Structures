const List = require('./LL');

let list;

beforeEach(() => list = new List());
afterAll(() => list = null);
test('a newly instantiated list exists', () => {
    const { head, tail } = list;
    expect(head).toBe(null);
    expect(tail).toBe(null);
});

test('a list instatiated with a value should have head and tail set to that value', () => {
    list = new List(5);
    const {head, tail} = list;
    expect(head.val).toBe(5);
    expect(head.next).toBe(null);
    expect(tail.val).toBe(5);
    expect(tail.next).toBe(null);
});

test('should assign head, tail on an empty list', () => {
    list.addToHead(42);
    const {head, tail} = list;
    expect(head.val).toBe(42);
    expect(tail.val).toBe(42);
})

test('should insert a new value at head position', () => {
    list = new List(42);
    list.addToHead(15);
    const { head } = list;
    expect(head.val).toBe(15);
})
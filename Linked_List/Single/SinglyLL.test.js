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
});

test('should insert multiple values and have correct head', () => {
    list = new List(3);
    list.addToHead(4);
    list.addToHead(2);
    list.addToHead(1);
    const {head} = list;
    expect(head.val).toBe(1);
});

test('should return null when removing from an empty list', () => {
    const result = list.removeFromHead();
    expect(result).toBe(null);
})

test('should remove the head from a list of size one', () => {
    list.addToHead(12);
    const result = list.removeFromHead();
    expect(result.val).toBe(12);
})

test('should set the tail to null when the list is emptied', () => {
    list.addToHead(12);
    list.removeFromHead();
    const { tail } = list;
    expect(tail).toBe(null);
});

test('should set the correct head and not change tail when removing from a list', () => {
    list.addToHead(13);
    list.addToHead(14);
    list.addToHead(12);
    const result = list.removeFromHead();
    expect(result.val).toBe(12);
    const { head, tail } = list;
    expect(head.val).toBe(14);
    expect(tail.val).toBe(13); 
});

test('should be empty after reset', () => {
    list.addToHead(12);
    list.addToHead(42);
    list.addToHead(16);
    list.reset();
    const {head, tail} = list;
    expect(head).toBe(null);
    expect(tail).toBe(null);
})
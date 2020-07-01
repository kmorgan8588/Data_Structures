const List = require('./LL');


let list;


beforeEach(() => list = new List());


test('a new list should have head and tail properties', () => {
    expect(list).toHaveProperty('head');
    expect(list).toHaveProperty('tail');
});

test('a new list should have null head, tail', () => {
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
    list.addToTail(42);
    const {head, tail} = list;
    expect(head.val).toBe(42);
    expect(tail.val).toBe(42);
});

test('should properly assign tail to a new node value after multiple additions', () => {
    list.addToTail(1);
    list.addToTail(2);
    list.addToTail(3);
    list.addToTail(5);
    const { tail, head } = list;
    expect(tail.val).toBe(5);
    expect(head.val).toBe(1);
});

test('should properly reassign head after removal', () => {
    list.addToTail(1);
    list.addToTail(2);
    list.addToTail(3);
    list.addToTail(5);
    list.removeFromHead();
    const { head } = list;
    expect(head.val).not.toBe(1);
    expect(head.val).toBe(2);
});

test('should properly reassign head after many removals', () => {
    list.addToTail(1);
    list.addToTail(2);
    list.addToTail(3);
    list.addToTail(5);
    list.removeFromHead();
    list.removeFromHead();
    list.removeFromHead();

    const { head } = list;
    expect(head.val).not.toBe(3);
    expect(head.val).toBe(5);
});

test('should return null when trying to remove from an empty list', () => {
    list.addToTail(1);
    list.addToTail(2);
    list.addToTail(3);
    list.addToTail(5);

    while(list.head) list.removeFromHead();
    const result = list.removeFromHead();
    expect(result).toBe(null);
});

test('head and tail should be null after removing all list items', () => {
    list.addToTail(1);
    list.addToTail(2);
    list.addToTail(3);
    list.addToTail(5);

    while(list.head) {
        list.removeFromHead();
    }

    const { head, tail } = list;

    expect(head).toBe(null);
    expect(tail).toBe(null);
})
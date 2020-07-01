const Stack = require('./Stack');

let stack;

beforeEach(() => stack = new Stack());


test('new stack should have size 0', () => {
    const { size } = stack;
    expect(size).toBe(0);
});

test('should return null when popping of an empty stack', () => {
    const result = stack.pop();
    expect(result).toBe(null);
});

test('size should not go below 0 when popping off an empty stack', () => {
    stack.pop();
    const { size } = stack;
    expect(size).toBeGreaterThan(-1);
});

test('size should increase when pushing on the stack', () => {
    stack.push(1);
    const { size } = stack;
    expect(size).toBe(1);
});

test('should pop off a value that was just pushed', () => {
    stack.push(15);
    const result = stack.pop();
    expect(result).toBe(15);
    expect(stack.size).toBe(0);
});

test('should pop all values in reverse order', () => {
    for (let i = 0; i < 5; i++) {
        stack.push(i);
    }
    const result = [];
    while(stack.size) {
        result.push(stack.pop());
    }
    expect(result).toEqual(expect.arrayContaining([4,3,2,1,0]));
});

test('peek should return null in an empty stack', () => {
    const top = stack.peek();
    expect(top).toBe(null);
})
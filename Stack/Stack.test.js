const Stack = require('./Stack');

let stack;

beforeEach(() => stack = new Stack());


test('new stack should have size 0', () => {
    const size = stack.length();
    expect(size).toBe(0);
});

test('should return null when popping of an empty stack', () => {
    const result = stack.pop();
    expect(result).toBe(null);
});

test('size should not go below 0 when popping off an empty stack', () => {
    stack.pop();
    const size = stack.length();
    expect(size).toBeGreaterThan(-1);
});

test('size should increase when pushing on the stack', () => {
    stack.push(1);
    const size = stack.length();
    expect(size).toBe(1);
});

test('should not push when val isn\'t specified', () => {
    stack.push();
    const size = stack.length();
    expect(size).toBe(0);
})

test('should pop off a value that was just pushed', () => {
    stack.push(15);
    const result = stack.pop();
    expect(result).toBe(15);
    expect(stack.length()).toBe(0);
});

test('should pop all values in reverse order', () => {
    for (let i = 0; i < 5; i++) {
        stack.push(i);
    }
    const result = [];
    while(stack.length()) {
        result.push(stack.pop());
    }
    expect(result).toEqual(expect.arrayContaining([4,3,2,1,0]));
});

test('peek should return null in an empty stack', () => {
    const top = stack.peek();
    expect(top).toBe(null);
});

test('should return the top value on a stack with one value', () => {
    stack.push(1);
    const top = stack.peek();
    expect(top).toBe(1);
})

test('should return the top value on a stack with many values', () => {
    stack.push(1);
    stack.push(12);
    stack.push(112);
    stack.push(1112);
    let top = stack.peek();
    expect(top).toBe(1112);
    stack.pop();
    top = stack.peek();
    expect(top).toBe(112);
})
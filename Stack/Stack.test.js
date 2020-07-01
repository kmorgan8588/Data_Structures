const Stack = require('./Stack');

let stack;

beforeEach(() => stack = new Stack());


test('new stack should have size 0', () => {
    const { size } = stack;
    expect(size).toBe(0);
})
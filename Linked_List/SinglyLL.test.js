const List = require('./Single/LL');

let list;

beforeEach(() => list = new List());

test('a newly instantiated list exists', () => {
    const { head, tail } = list;
    expect(head).toBe(null);
    expect(tail).toBe(null);
});
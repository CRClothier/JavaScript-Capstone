const { fetch } = require('./__mock__/fetch.js');

describe('Test for counter', () => {
  test('comment counter should return 2', async () => {
    const res = await fetch();
    const count = res['1'].length;
    expect(count).toBe(2);
  });
});

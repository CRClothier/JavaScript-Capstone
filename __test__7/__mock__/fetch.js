module.exports = {
  fetch: jest.fn(() => Promise.resolve({
    1: [
      {
        username: 'User1',
        comment: 'Sample comment1',
        creation_date: '2022-03-10',
      },

      {
        username: 'User2',
        comment: 'Sample comment2',
        creation_date: '2022-03-10',
      },
    ],
  })),
};

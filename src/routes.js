const {BookHandler} = require('./bookHandler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: BookHandler.add,
  },
  {
    method: 'GET',
    path: '/books',
    handler: BookHandler.getAll,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: () => {},
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: () => {},
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: () => {},
  },

];

module.exports = routes;


const {BookHandler} = require('./handlers/bookHandler');

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
    handler: BookHandler.getDetail,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: BookHandler.update,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: () => {},
  },

];

module.exports = routes;


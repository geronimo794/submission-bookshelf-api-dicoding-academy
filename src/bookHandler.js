const {nanoid} = require('nanoid');
const {book} = require('./models/book.js');
const {books} = require('./books.js');
const {Response} = require('./models/response');

/**
 * Collection of book handler function
 */
class BookHandler {
  /**
   * Request handler for add book
   *
   * @param {*} request The request payload object
   * @param {*} h The hapi object for response
   * @return {*} The response data
   */
  static add = (request, h) => {
    const {name, year, author, summary, publisher, pageCount,
      readPage, reading} = request.payload;

    // If name is empty
    if (!name) {
      const response = h.response(Response.responseFailIncompleteNameAdd);
      response.code(400);
      return response;
    }

    // If readPage > pageCount
    if (readPage > pageCount) {
      // eslint-disable-next-line max-len
      const response = h.response(Response.responseFailReadPageMoreThanPageCountAdd);
      response.code(400);
      return response;
    }

    const newBook = book;
    newBook.id = nanoid(16);
    newBook.name = name;
    newBook.year = year;
    newBook.author = author;
    newBook.summary = summary;
    newBook.publisher = publisher;
    newBook.pageCount = pageCount;
    newBook.readPage = readPage;
    newBook.finished = (readPage == pageCount);
    newBook.reading = (reading == 'true' ? true : false);
    newBook.insertedAt = new Date().toISOString();
    newBook.updatedAt = newBook.insertedAt;

    books.push(newBook);
    const isSuccess = books.filter((book) => book.id === newBook.id).length > 0;

    if (isSuccess) {
      const newBookSuccess = Response.responseSuccessAddBook;
      newBookSuccess.data.bookId = newBook.id;
      const response = h.response(newBookSuccess);
      response.code(201);
      return response;
    }
    const response = h.response({
      status: 'fail',
      message: 'Catatan gagal ditambahkan',
    });
    response.code(500);
    return response;
  };
  /**
   * Request handler for get book
   *
   * @param {*} request The request payload object
   * @param {*} h The hapi object for response
   * @return {*} The response data
   */
  static getAll = (request, h) => {
    // Recompose response array
    const newBook = [];
    books.forEach((v, i) => {
      newBook.push({id: v.id, name: v.name, publisher: v.publisher});
    });

    // Get response structure
    const newResponseBookList = Response.responseSuccessGetBookList;
    newResponseBookList.data.books = newBook;
    const response = h.response(newResponseBookList);
    response.code(200);
    return response;
  };
}

module.exports = {BookHandler};

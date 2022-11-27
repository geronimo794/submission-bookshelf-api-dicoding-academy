const {nanoid} = require('nanoid');
const {book} = require('../models/book.js');
const {books} = require('../books.js');
const {Response} = require('../models/response');

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

  /**
   * Request handler for get book
   *
   * @param {*} request The request payload object
   * @param {*} h The hapi object for response
   * @return {*} The response data
   */
  static getDetail = (request, h) => {
    const {bookId} = request.params;

    const book = books.filter((n) => n.id === bookId)[0];

    if (book !== undefined) {
      const newResponseSucces = Response.responseSuccessGetBookDetail;
      newResponseSucces.data.book = book;
      return h.response(newResponseSucces);
    }

    const newResponseNotFound = Response.responseFailBookNotFound;
    const response = h.response(newResponseNotFound);
    response.code(404);
    return response;
  };

  /**
   * Request handler for update book
   *
   * @param {*} request The request payload object
   * @param {*} h The hapi object for response
   * @return {*} The response data
   */
  static update = (request, h) => {
    const {name, year, author, summary, publisher, pageCount,
      readPage, reading} = request.payload;
    const {bookId} = request.params;

    // If name is empty
    if (!name) {
      const response = h.response(Response.responseFailIncompleteNameUpdate);
      response.code(400);
      return response;
    }

    // If readPage > pageCount
    if (readPage > pageCount) {
      // eslint-disable-next-line max-len
      const response = h.response(Response.responseFailReadPageMoreThanPageCountUpdate);
      response.code(400);
      return response;
    }

    const index = books.findIndex((books) => books.id === bookId);

    if (index !== -1) {
      books[index].name = name;
      books[index].year = year;
      books[index].author = author;
      books[index].summary = summary;
      books[index].publisher = publisher;
      books[index].pageCount = pageCount;
      books[index].readPage = readPage;
      books[index].finished = (readPage == pageCount);
      books[index].reading = (reading == 'true' ? true : false);
      books[index].updatedAt = new Date().toISOString();
      const newResponseSucces = Response.responseSuccessUpdateBook;

      const response = h.response(newResponseSucces);
      response.code(200);
      return response;
    }

    // If data not found
    const newResponseNotFound = Response.responseFailBookNotFoundUpdate;
    const response = h.response(newResponseNotFound);
    response.code(404);
    return response;
  };

  /**
   * Request handler for delete book
   *
   * @param {*} request The request payload object
   * @param {*} h The hapi object for response
   * @return {*} The response data
   */
  static delete = (request, h) => {
    const {bookId} = request.params;
    const index = books.findIndex((book) => book.id === bookId);
    if (index !== -1) {
      books.splice(index, 1);

      const newResponseSucces = Response.responseSuccessDeleteBook;
      const response = h.response(newResponseSucces);
      response.code(200);
      return response;
    }

    const newResponseNotFound = Response.responseFailBookNotFoundDelete;
    const response = h.response(newResponseNotFound);
    response.code(404);
    return response;
  };
}

module.exports = {BookHandler};

const {nanoid} = require('nanoid');
const {book} = require('./models/book.js');
const {books} = require('./books.js');
const {responseFailIncompleteNameAdd,
  responseFailReadPageMoreThanPageCountAdd,
  // responseFailReadPageMoreThanPageCountUpdate,
  // responseFailIncompleteNameUpdate,
  // responseFailBookNotFound,
  // responseFailBookNotFoundUpdate,
  // responseFailBookNotFoundDelete,
  // responseErrorAddBook,
  responseSuccessAddBook,
  // responseSuccessUpdateBook,
  // responseSuccessGetBookList,
  // responseSuccessGetBookDetail,
  // responseSuccessDeleteBook
} = require('./models/response');

const addBookHandler = (request, h) => {
  const {name, year, author, summary, publisher, pageCount,
    readPage, reading} = request.payload;

  // If name is empty
  if (!name) {
    const response = h.response(responseFailIncompleteNameAdd);
    response.code(400);
    return response;
  }

  // If readPage > pageCount
  if (readPage > pageCount) {
    const response = h.response(responseFailReadPageMoreThanPageCountAdd);
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
    const newBookSuccess = responseSuccessAddBook;
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

module.exports = {addBookHandler};

/**
 * Response Failed
 */
const responseFailIncompleteNameAdd = {
  'status': 'fail',
  'message': 'Gagal menambahkan buku. Mohon isi nama buku',
};
const responseFailIncompleteNameUpdate = {
  'status': 'fail',
  'message': 'Gagal memperbarui buku. Mohon isi nama buku',
};
const responseFailReadPageMoreThanPageCountAdd = {
  'status': 'fail',
  // eslint-disable-next-line max-len
  'message': 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
};
const responseFailReadPageMoreThanPageCountUpdate = {
  'status': 'fail',
  // eslint-disable-next-line max-len
  'message': 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
};

const responseErrorAddBook = {
  'status': 'error',
  'message': 'Buku gagal ditambahkan',
};
const responseFailBookNotFound = {
  'status': 'fail',
  'message': 'Buku tidak ditemukan',
};
const responseFailBookNotFoundUpdate = {
  'status': 'fail',
  'message': 'Gagal memperbarui buku. Id tidak ditemukan',
};
const responseFailBookNotFoundDelete = {
  'status': 'fail',
  'message': 'Buku gagal dihapus. Id tidak ditemukan',
};

/**
 * Response Success
 */
const responseSuccessAddBook = {
  status: 'success',
  message: 'Buku berhasil ditambahkan',
  data: {
    bookId: '',
  },
};
const responseSuccessGetBookList = {
  'status': 'success',
  'data': {
    'books': [],
  },
};
const responseSuccessGetBookDetail = {
  'status': 'success',
  'data': {
    'book': {},
  },
};
const responseSuccessUpdateBook = {
  'status': 'success',
  'message': 'Buku berhasil diperbarui',
};
const responseSuccessDeleteBook = {
  'status': 'success',
  'message': 'Buku berhasil dihapus',
};


module.exports= {responseFailIncompleteNameAdd,
  responseFailIncompleteNameUpdate,
  responseFailReadPageMoreThanPageCountAdd,
  responseFailReadPageMoreThanPageCountUpdate,
  responseFailBookNotFound,
  responseFailBookNotFoundUpdate,
  responseFailBookNotFoundDelete,
  responseErrorAddBook,
  responseSuccessAddBook,
  responseSuccessUpdateBook,
  responseSuccessGetBookList,
  responseSuccessGetBookDetail,
  responseSuccessDeleteBook};

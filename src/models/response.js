/**
 * Response Failed
 */
class Response {
  static responseFailIncompleteNameAdd = {
    'status': 'fail',
    'message': 'Gagal menambahkan buku. Mohon isi nama buku',
  };
  static responseFailIncompleteNameUpdate = {
    'status': 'fail',
    'message': 'Gagal memperbarui buku. Mohon isi nama buku',
  };
  static responseFailReadPageMoreThanPageCountAdd = {
    'status': 'fail',
    // eslint-disable-next-line max-len
    'message': 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
  };
  static responseFailReadPageMoreThanPageCountUpdate = {
    'status': 'fail',
    // eslint-disable-next-line max-len
    'message': 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
  };

  static responseErrorAddBook = {
    'status': 'error',
    'message': 'Buku gagal ditambahkan',
  };
  static responseFailBookNotFound = {
    'status': 'fail',
    'message': 'Buku tidak ditemukan',
  };
  static responseFailBookNotFoundUpdate = {
    'status': 'fail',
    'message': 'Gagal memperbarui buku. Id tidak ditemukan',
  };
  static responseFailBookNotFoundDelete = {
    'status': 'fail',
    'message': 'Buku gagal dihapus. Id tidak ditemukan',
  };
  /**
   * Response Success
   */
  static responseSuccessAddBook = {
    status: 'success',
    message: 'Buku berhasil ditambahkan',
    data: {
      bookId: '',
    },
  };
  static responseSuccessGetBookList = {
    status: 'success',
    data: {
      books: [],
    },
  };
  static responseSuccessGetBookDetail = {
    'status': 'success',
    'data': {
      'book': {},
    },
  };
  static responseSuccessUpdateBook = {
    'status': 'success',
    'message': 'Buku berhasil diperbarui',
  };
  static responseSuccessDeleteBook = {
    'status': 'success',
    'message': 'Buku berhasil dihapus',
  };
}


module.exports= {Response};

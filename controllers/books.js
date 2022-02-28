const Books = require('../models/books');

exports.postBook = (req, res, next) => {
  const book = new Books(1, req.body.title, 
    req.body.description, 
    req.body.ranking);
    console.log(book);
  book.add();
  res.redirect('/');
}

exports.getDetails = (req, res, next) => {
  const bookId = req.params.bookId;
  Books.findById(bookId, book => {
    console.log(book);
    res.render('books', {
      book: book,
      pageTitle: 'Book Details',
      editable: false,
      path: '/book-details'
    });
  });
}

exports.getEditable = (req, res, next) => {
  const bookId = req.params.bookId;
  Books.findById(bookId, book => {
    console.log(book);
    res.render('books', {
      book: book,
      pageTitle: 'Edit Book',
      editable: true,
      path: '/book-details'
    });
  });
}

exports.deleteBook = (req, res, next) => {
  const bookId = req.body.bookId;
  Books.deleteById(bookId, res.redirect('/'));

}

exports.saveBook = (req, res, next) => {
  const bookId = req.body.bookId;
  const bookTitle = req.body.title;
  const bookDesc = req.body.description;
  const bookRank= req.body.ranking;
  const book = new Books(bookId, bookTitle, bookDesc, bookRank);
  book.save();
  res.redirect('/');
}
const Books = require('../models/books');

exports.getMain = (req, res, next) => {
    Books.allBooks(books => {
        res.render('main', {
            books: books,
            pageTitle: 'Book Directory',
            path: '/'
        });
    });
};
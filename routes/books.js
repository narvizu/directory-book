const express = require('express');
const router = express.Router();

const bookController = require('../controllers/books');

router.get('/book-details/:bookId', bookController.getDetails);
router.get('/edit-book/:bookId', bookController.getEditable);

router.post('/add-book', bookController.postBook);
router.post('/delete-book', bookController.deleteBook);
router.post('/save-book', bookController.saveBook);

module.exports = router;


import express from 'express';
const router = express.Router();
import BookController from '../controller/book';
import { createtBookSchema, deleteBookSchema, getBookSchema } from '../middlewares/book_validate';

//get all books
router.get('/', BookController.getAllBooks);

//get a book
router.get('/id', getBookSchema, BookController.getBook)

// create book
router.post('/', createtBookSchema, BookController.createBook);

// delete book
router.delete('/:id', deleteBookSchema, BookController.deleteBook)

export default router;

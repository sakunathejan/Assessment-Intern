//Imported the dependencies
import express from 'express';
import { getAllBooks, getBookById, addBook, updateBook, deleteBook } from '../Controllers/bookController.js';
import validateBook from '../Middlewares/validateBook.js';


const router = express.Router();

router.get('/', getAllBooks);
router.get('/:id', getBookById);
router.post('/', validateBook, addBook);
router.put('/:id', validateBook, updateBook);
router.delete('/:id', deleteBook);

export default router;
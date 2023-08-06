import { Router } from "express";
import { getBook, indexBook, updateBook, removeBook, storeBook } from "../controllers/books.controller.js";

const routerBooks = Router()

routerBooks.route('/books')
    .get(indexBook)// Get all books
    .post(storeBook)// Create a book

routerBooks.route('/books/:id')
    .get(getBook)// Get one books
    .put(updateBook)// Update a book
    .delete(removeBook)// Remove a book

export default routerBooks
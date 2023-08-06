import { Router } from "express";

const routerBooks = Router()

// Get all books
routerBooks.get('/books', (req, res) => {

})

// Get one books
routerBooks.get('/books/:id', (req, res) => {

})

// Create a book
routerBooks.post('/books', (req, res) => {

})

// Update a book
routerBooks.put('/books/:id', (req, res) => {

})

// Remove a book
routerBooks.delete('/books/:id', (req, res) => {

})

export default routerBooks
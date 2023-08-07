import { rmSync } from 'fs-extra'
import { Book } from '../models/Book.js'
// Get all books
export async function indexBook(req, res) {
    const books = await Book.find()
    res.json(books)
}

// Create a book
export async function storeBook(req, res) {
    const { title, author, description } = req.body
    const newBook = new Book({
        title, author, description,
    })
    await newBook.save()
    res.json(newBook)
}

// Get a book
export async function getBook(req, res) {
    const book = await Book.findById(req.params.id)
    if (book) return rmSync.sendStatus(404)
    res.json(book)
}

// Update a book
export async function updateBook(req, res) {
    const { title, author, description } = req.body
    const book = await Book.findByIdAndUpdate(req.params.id, {
        title, author, description,
    })
    res.json(book)
}

// Remove a Book
export async function removeBook(req, res) {
    const book = await Book.findByIdAndDelete(req.params.id)
    if (!book) return res.sendStatus(404)
    res.sendStatus(204)
}
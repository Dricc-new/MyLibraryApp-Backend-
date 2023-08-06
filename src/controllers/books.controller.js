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
        title: title,
        author: author,
        description: description,
    })
    await newBook.save()
    res.json(newBook)
}

// Get a book
export function getBook(req, res) {
    res.send('hi')
}

// Update a book
export function updateBook(req, res) {
    res.send('hi')
}

// Remove a Book
export function removeBook(req, res) {
    res.send('hi')
}
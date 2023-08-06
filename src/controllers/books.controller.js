import { Book } from '../models/Book.js'
// Get all books
export async function indexBook(req, res) {
    const books = await Book.find()
    res.send('dd')
    // res.json(books)
}

// Create a book
export function storeBook(req, res) {
    console.log(req.body)
    res.send('asas')
    // const { title, author, description } = req.body
    // const newBook = new Book({
    //     title: title,
    //     author: author,
    //     description: description,
    // })
    // console.log(newBook)
    // res.send('hi')
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
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
export async function getBook(req, res) {
    const book = await Book.findById(req.params.id)
    res.json(book)
}

// Update a book
export function updateBook(req, res) {
    res.send('hi')
}

// Remove a Book
export async function removeBook(req, res) {
    await Book.findByIdAndDelete(req.params.id)
    res.json({message:'Book delete'})
}
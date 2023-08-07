import { Book } from '../models/Book.js'
import { deleteImage, uploadImage } from '../libs/cloudinary.js'
import fs from 'fs/promises'

// Get all books
export async function indexBook(req, res) {
    try {
        const books = await Book.find()
        res.json(books)
    } catch (err) {
        return res.status(500).json(err.message)
    }
}

// Create a book
export async function storeBook(req, res) {
    const { title, author, description } = req.body
    let image
    if (req.files.image) {
        const result = await uploadImage(req.files.image.tempFilePath)
        await fs.rm(req.files.image.tempFilePath)
        image = {
            url: result.secure_url,
            public_id: result.public_id
        }
    }

    const newBook = new Book({
        title, author, description, image
    })
    try {
        await newBook.save()
        res.json(newBook)
    } catch (err) {
        return res.status(500).json(err.message)
    }
}

// Get a book
export async function getBook(req, res) {
    try {
        const book = await Book.findById(req.params.id)
        if (book) return res.sendStatus(404)
        res.json(book)
    } catch (err) {
        return res.status(500).json(err.message)
    }
}

// Update a book
export async function updateBook(req, res) {
    const { title, author, description } = req.body
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, {
            title, author, description,
        })
        res.json(book)
    } catch (err) {
        return res.status(500).json(err)
    }
}

// Remove a Book
export async function removeBook(req, res) {
    try {
        const book = await Book.findByIdAndDelete(req.params.id)
        if (!book) return res.sendStatus(404)
        
        if (book.image.public_id) await deleteImage(book.image.public_id)
        res.sendStatus(204)
    } catch (err) {
        return res.status(500).json(err)
    }
}
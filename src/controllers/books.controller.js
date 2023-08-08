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
    try {
        if (req.files?.image) {
            // Upload image to cloudinary
            const result = await uploadImage(req.files.image.tempFilePath)

            // Delete image from temporary file
            await fs.rm(req.files.image.tempFilePath)

            // Set image data
            image = {
                url: result.secure_url,
                public_id: result.public_id
            }
        }

        // Create new Book
        const newBook = new Book({
            title, author, description, image
        })
        // Save book in database
        await newBook.save()
        res.json(newBook)
    } catch (err) {
        if (req.files?.image) await fs.rm(req.files.image.tempFilePath)
        return res.status(500).json(err.message)
    }
}

// Get a book
export async function getBook(req, res) {
    try {
        // Search for the book in the database.
        const book = await Book.findById(req.params.id)

        // If it doesn't find it, it returns a 404 error.
        if (!book) return res.sendStatus(404)
        res.json(book)
    } catch (err) {
        return res.status(500).json(err.message)
    }
}

// Update a book
export async function updateBook(req, res) {
    const { title, author, description } = req.body
    try {
        // Update the book in database
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
        // Delete the book from the database.
        const book = await Book.findByIdAndDelete(req.params.id)

        // If it doesn't find it, it returns a 404 error.
        if (!book) return res.sendStatus(404)

        // If you have an image, delete it from cloudinary
        if (book.image.public_id) await deleteImage(book.image.public_id)
        res.sendStatus(204)
    } catch (err) {
        return res.status(500).json(err)
    }
}
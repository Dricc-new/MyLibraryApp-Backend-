import { Schema, model } from "mongoose";

const bookSchema = new Schema({
    title: { type: String, required: true, trim: true },
    author: { type: String, required: true, trim: true, default: 'anonymous' },
    description: { type: String, required: true, trim: true },
    image: {
        url: String,
        public_id: String,
    },
    create_at: { type: Date, default: Date.now }
})

export const Book = model('Book', bookSchema)

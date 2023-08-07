import { config } from "dotenv";
config()

export const PORT = process.env.PORT || 3000
export const DB_URI = process.env.DB_URI

export const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME
export const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY
export const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET
export const CLOUDINARY_SECORE = process.env.CLOUDINARY_SECORE
export const CLOUDINARY_FOLDER = process.env.CLOUDINARY_FOLDER
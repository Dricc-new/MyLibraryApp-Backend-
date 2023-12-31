import { v2 as cloudinary } from 'cloudinary'
import { CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET, CLOUDINARY_CLOUD_NAME, CLOUDINARY_FOLDER, CLOUDINARY_SECORE } from '../config.js';

// Config of Cloudinary
cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
    secure: CLOUDINARY_SECORE,
});

// Upload image
export const uploadImage = async (filePath) =>{
    return await cloudinary.uploader.upload(filePath,{
        folder: CLOUDINARY_FOLDER
    })
}

// Delete image
export const deleteImage = async id =>{
    return await cloudinary.uploader.destroy(id)
}
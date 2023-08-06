import mongoose from "mongoose";
import { DB_URI } from "./config.js";

const uri = DB_URI

mongoose.connect(uri, {
})

const connection = mongoose.connection

connection.once('open', () => {
    console.log('DB is connected')
})
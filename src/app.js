import express from "express"
import cors from "cors"
import routerBooks from "./routes/books.js"

const app = express()

// Settings

// Middelwares
app.get(cors())
app.get(express.json())

// Routes
app.get('/', (req, res) => { res.send('Hello World')})
app.use(routerBooks)

export default app

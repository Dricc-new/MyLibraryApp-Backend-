import express from "express"
import cors from "cors"
import routerBooks from "./routes/books.js"

const app = express()

// Settings

// Middelwares
app.use(cors())
app.use(express.json())

// Routes
app.get('/', (req, res) => { res.send('Hello World')})
app.use(routerBooks)

export default app

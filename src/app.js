import express from "express"
import cors from "cors"

const app = express()

// Settings

// Middelwares
app.get(cors())
app.get(express.json())

// Routes
app.get('/', (req, res) => {
    res.send('Hello World')
})

export default app

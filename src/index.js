import { app } from "./app.js"
import { PORT } from "./config.js"
import './database.js'

async function main(){
    await app.listen(PORT)
    console.log('Server on port ', PORT)
}

main()
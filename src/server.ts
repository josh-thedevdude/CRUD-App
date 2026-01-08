import express from "express"
import dotenv from "dotenv"
import path from "path";

const env = process.env.NODE_ENV || 'dev'
const envPath = path.resolve(import.meta.dirname, `../env/.env.${env}`)
console.log(envPath)

dotenv.config({ path: envPath })

const app = express()

app.use(express.json())

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})
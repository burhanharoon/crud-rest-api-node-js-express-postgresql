import express, { json } from 'express'
import "dotenv/config"
import bodyparser from 'body-parser'
const app = express()
import db from './queries.js'

const port = process.env.PORT || 5000

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.get('/api/users', db.getUsers)

app.get('/', (req, res) => {
    res.json('Api running successfully')
})

app.listen(port, () => {
    console.log(`Api is running in Development mode at port ${port}`)
})
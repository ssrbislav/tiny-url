const express = require('express')
const db_connect = require('./db')
require('dotenv/config')

const app = express()
app.use(express.json())

const routes = require('./routes/index')
app.use('/', routes)

db_connect()

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
})
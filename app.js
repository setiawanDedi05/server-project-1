require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000
const cors = require('cors')
const route = require('./router')

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(route)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
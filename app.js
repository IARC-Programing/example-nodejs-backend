const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const axios = require('axios')
const mongoose = require('mongoose')
const app = express()

const port = 5000
const userRouter = require('./routes/users')
const companyRouter = require('./routes/company')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

mongoose.connect('mongodb://localhost:27017/monitor-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection
db.on('error', (error) => {
  console.log('error ', error)
})
db.once('open', () => {
  console.log('Connection OK')
})

app.use('/user', userRouter)
app.use('/company', companyRouter)

app.get('/', (req, res) => {
  res.sendStatus(200)
})

app.post('/', (req, res) => {
  console.log(req.body)
  res.json(req.body)
})

app.listen(port, () => {
  console.log('Application is Listening on port ' + port)
})

module.exports = app

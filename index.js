const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

// route / url / endpoint, method GET

app.use(bodyParser.json())

app.get('/', (request, respond) => {
    respond.send('utama!')
  })

app.get('/hello', (req, res) => {
  res.send('Hello World! lala')
})

app.post('/login', (req, res) => {
    console.log({requestFromOutside: req.body}) 
    res.send('Login berhasil ')
})

app.put('/username', (req, res) => {
    console.log({updateData: req.body})
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

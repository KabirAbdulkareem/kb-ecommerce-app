const path = require('path')
const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 5002


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`kb-ecommerce app listening on port ${port}`)
})
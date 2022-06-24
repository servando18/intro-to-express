// Import express here
const express = require('express')

// Create an Express application
const app = express()

// Declare a port number here
const port = 3000

// Create your '/' route here
app.get('/', (req, res) => {
  res.send("<a href='/boo'>Click here if you dare!</a>")
})

// Create your '/boo' route here
app.get('/boo', (req, res) => {
  res.send("<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Halloween-2870607_1920.jpg/640px-Halloween-2870607_1920.jpg'>")
})

// Make your app listen for incoming connections
app.listen(port)
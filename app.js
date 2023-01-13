const express = require('express')
const app = express()
const port = 3000

// app.use(express.urlencoded());
// Import the routes file
const routes = require('./routes')

// Use the routes in the app
app.use('/', routes)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

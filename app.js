const express = require('express');
const app = express();
var expressLayouts = require('express-ejs-layouts');
const port = 3000;
// require the database
const db = require('./config/mongoose');

app.use(express.static('assets'));
app.use(express.urlencoded());

//set the view engine to ejs
app.set('view engine', 'ejs');

// express layouts
app.use(expressLayouts);

// Import the routes file
const routes = require('./routes')

// Use the routes in the app
app.use('/', routes)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

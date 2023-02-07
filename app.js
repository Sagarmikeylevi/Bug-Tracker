const express = require('express');
const app = express();
var expressLayouts = require('express-ejs-layouts');
const port = 3000;
// require the database
const db = require('./config/mongoose');
// used for session cookie
const session = require('express-session');
/* allows you to store session data in a MongoDB database, instead of in memory or in a file. */
const MongoStore = require('connect-mongo');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const flash = require('connect-flash');
const customMware = require('./config/middleware');


app.use(express.urlencoded());

app.use(express.static('./assets'));

app.use(session({
    name: 'BUG TRACKER',
    secret: 'mySecret',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    store: MongoStore.create({
        mongoUrl: 'mongodb://localhost/Bug_tracker_DB',
        autoRemove:'disabled' 
      },function(err){
        console.log(err || 'connect-mongodb setup ok');
      }
      )
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticateduser);



// express layouts
app.use(expressLayouts);

//set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views' , './views');

// flash
app.use(flash());
app.use(customMware.setFlash);

// Import the routes file
app.use('/' , require('./routes'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

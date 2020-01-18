// Require modules
const express = require('express');
const logger = require('morgan');
const session = require('express-session');
const methodOverride = require('method-override');
const passport = require('passport');
const port = process.env.PORT || 3000;

require ('dotenv').config();

require('./config/database');
require('./config/passport');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const artistsRouter = require('./routes/artists');


// Set up express app
const app = express();

// Connect to DB

require('./config/database');

// Configure Express App app.set()
app.set('view engine', 'ejs');

// Mount middleware app.use()
app.use(logger('dev'));
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: 'MUSIC',
    resave: false,
    saveUninitialized: true

}));

app.use(passport.initialize());
app.use(passport.session());

// Mount Routes app.use()

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/', artistsRouter);

// Tell App to listen
app.listen(port, () => {
    console.log(`Express is listening on port:${port}`);
});
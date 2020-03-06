const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const es6Renderer = require('express-es6-template-engine');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const reviewRouter = require('./routes/albumReview');
// const loginRouter = require('./routes/login');
// const registerRouter = require('./routes/register');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.engine('html', es6Renderer);
app.set('views', './views');
app.set('view engine', 'html');

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/reviews', reviewRouter);
// app.use('/login', loginRouter);
// app.use('/register', registerRouter);

module.exports = app;

import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import readTextFile from './readFile.js';

import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';

const app = express();

// view engine setup
app.set('views', path.join('D:/Games/main/hw-df/views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join('D:/Games/main/hw-df/public', 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);



app.get('/df', (req, res) => {
  res.render('index');
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


export default app;

app.listen(4000);

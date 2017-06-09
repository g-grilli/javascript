var express = require('express');
var app = express();
var body_parser = require('body-parser');

var promise = require('bluebird');
var pgp = require('pg-promise')({
  promiseLib: promise
});

var db = pgp({database: 'to_do'});

app.use(body_parser.urlencoded({extended: false}));
app.use('/static', express.static('public'));

app.get('/todos', function (request, response, next) {
  let term = request.query.searchTerm;
  let query = "SELECT * FROM task";
  db.any(query, term)
    .then(function (results) {
      response.render('todos.hbs', {results: results});
    })
    .catch(next);
});

app.get('/todos/add', function (request, response, next) {
  let term = request.query.searchTerm;
  let query = "SELECT * FROM task";
  db.any(query, term)
    .then(function (results) {
      response.render('add.hbs', {results: results});
    })
    .catch(next);
});

app.post('/todos/add', function (request, response, next) {
  let term = request.body.add;
  console.log(term);
  let query ='INSERT INTO task VALUES (default, $1, TRUE)';
  db.any(query, term)
    .then(function (results) {
      response.render('add.hbs', {results: results});
    })
    .catch(next);
});

app.get('/todos/done', function (request, response, next) {
  let term = request.query.searchTerm;
  let query = "SELECT * FROM task";
  db.any(query, term)
    .then(function (results) {
      response.render('done.hbs', {results: results});
    })
    .catch(next);
});

app.post('/todos/done', function (request, response, next) {
  let term = request.body.done;
  console.log(term);
  let query =`UPDATE task SET done = FALSE WHERE id = ${term}`;
  db.any(query, term)
    .then(function (results) {
      response.render('done.hbs', {results: results});
    })
    .catch(next);
});

app.listen(8000, function () {
  console.log('Listening on port 8000');
});























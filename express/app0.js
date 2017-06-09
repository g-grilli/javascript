var express = require('express');
var app = express();
var body_parser = require('body-parser');

// adds promise and bluebird for database requests
var promise = require('bluebird');
var pgp = require('pg-promise')({
  promiseLib: promise
});

// adds test database
var db = pgp({database: 'test'});

// adds handlebars framework
app.set('view engine', 'hbs');

app.use(body_parser.urlencoded({extended: false}));


// add public directory and call item http://localhost:8000/static/submarine.png
app.use('/static', express.static('public'));

app.get('/', function (request, response) {
  response.send('<h1>Hello World!</h1>');
});
// 2 additional routes
app.get('/about', function (request, response) {
  response.send('About Me');
});

app.get('/projects', function (request, response) {
  response.send('Projects');
});

// add route paremters for post and slug URL Paremeters
app.get('/post/:slug', function (request, response) {
  var slug = request.params.slug;
  response.send('Post About: ' + slug);
});
// GET Quesry Paremeters
app.get('/hello', function (request, response) {
  var name = request.query.name || 'World';
  response.send('Hello ' + name);
});
// http://localhost:8000/hello?name=Gene - enter name Hello Gene
// http://localhost:8000/hello - Hello World

app.get('/hello2', function (request, response) {
  var name = request.query.name || 'World';
  var context = {
  	title: 'Hello',
  	content: "hello there", 
  	name: name,
  	friends: [{name: 'joan', age: 21},{name: 'steve', age: 22}]
  };
  response.render('hello.hbs', context);
});

app.get('/form', function(request, response) {
  response.render('form.hbs', {title: 'html form'});
});

app.post('/submit', function (request, response) {
  console.log(request.body);
  response.redirect('/thank-you');
});

app.get('/thank-you', function (request, response) {
  response.render('thanks.hbs', {title: 'Thanks!'});
});

app.get('/search', function(request, respsponse, next) {
  let term = request.query.searchTerm;
  let query = "SELECT * FROM restaurant WHERE \
  restaurant.name ILIKE '%$1#%'";
  db.any(query, term)
    .then(function(resultsArray) {
      response.render('search_results.hbs', {
        results: resultsArray
      });
    })
    .catch(next);
});

app.listen(8000, function () {
  console.log('Listening on port 8000');
});



/* To Run Use : node_modules/.bin/nodemon app.js

OR

nano ~/.bash_profile` path hack add: `export PATH=$PATH:./node_modules/.bin`

This will let you run as nodemon app.js */

/* layout allows you to create a template, only one view must be called layout. */




var express = require('express');
var body_parser = require('body-parser');
var promise = require('bluebird');
var pgp = require('pg-promise')({
  promiseLib: promise
});
var session = require('express-session');
var morgan = require('morgan');
var db = pgp({database: 'test'});
var app = express();

app.set('view engine', 'hbs');
app.use(morgan('dev'));
app.use(body_parser.urlencoded({extended: false}));
app.use('/static', express.static('public'));

/*
app.use(session({
  secret: process.env.SECRET_KEY || 'dev',
  resave: true,
  saveUninitialized: false,
  cookie: {maxAge: 6000000}
}));


app.use(function (request, response, next) {
  if (request.session.user) {
    next();
  } else if (request.path == '/login') {
    next();
  } else {
    response.redirect('/login');
  }
});

 app.get('/login', function (request, response) {
  response.render('login.hbs');
});

app.post('/login', function (request, response) {
  var username = request.body.username;
  var password = request.body.password;
  if (username == 'aaron' && password == 'narf') {
    request.session.user = username;
    response.redirect('/');
  } else {
    response.render('login.hbs');
  } 
}); */ 

app.get('/', function (request, response) {
	response.render('homepage.hbs', {})
})

app.get('/search', function (request, response, next) {
  let term = request.query.searchTerm;
  let query = "SELECT * FROM restaurant2 WHERE restaurant2.name ILIKE '%$1#%'";
  db.any(query, term)
    .then(function (results) {
      response.render('search.hbs', {results: results});
    })
    .catch(next);
});

app.get('/restaurant/:slug', function (request, response, next) {
  var slug = request.params.slug;
  console.log(slug);
  var query = `SELECT * FROM restaurant2 WHERE id = ${slug}`;
  var query2 = `SELECT * FROM review WHERE restaurant_id = ${slug}`;
  var context = {};
  db.any(query, slug)
   .then(function (results) {
   	 context.restaurants = results;
   	 return db.any(query2)
   })
   .then(function (results2) {
   	context.reviews = results2;
   	console.log(context);
   	response.render('restaurant.hbs', context);
   })
   .catch(next);
});

app.post('/thanks', function (request, response, next) {
  var slug = request.params.slug;
  var term = request.body.add;
  console.log(term);
  var query =`INSERT INTO review VALUES (default, default, '2', 'Hi Mom', 'seafood', 'review');`;
  db.any(query, term)
    .then(function (results) {
      response.render('thanks.hbs', {results: results});
    })
    .catch(next);
});

app.post('/restaurant/new', function (request, response, next) {
  var slug = request.params.slug;
  var term = request.body.add;
  console.log(term);
  var query =`INSERT INTO review ('id', 'stars', 'review', 'restaurant_id') VALUES (default, )`;
  db.any(query, term)
    .then(function (results) {
      response.render('thanks.hbs', {results: results});
    })
    .catch(next);
});


app.listen(8000, function () {
  console.log('Listening on Port 8000');
});


var express = require('express');
var app = express();

app.get('/', function (request, response) {
  response.send('Hello World!');
});
app.get('/cats', function (request, response) {
  response.send('MEOW');
});
app.get('/dogs', function (request, response) {
  response.send('WOOF');
});

app.get('/cats_and_dogs', function (request, response) {
  response.send('Living together');
});

//app.get('/greet/:slug', function (request, response) {
//  var slug = request.params.slug;
//  response.send("Hello,   " + slug + "!");
//});

app.get('/year', function (request, response) {
  var age = request.query.age || 'no idea';
  response.send('You were born in ' + (2017 - age));
});

app.get('/greet/:slug', function (request, response) {
  var slug = request.params.slug;
  var age = request.query.age || 104;
  var year = 2017 - age;
  var context = {
  	title: 'Greet', 
  	name: slug,
  	year: year
  };
  response.render('greet.hbs', context); 
});

app.get('/fav_animals', function (request, response) {
	var context = {
		title: 'FAV Animals',
		content: 'My favorite animals are: ',
		animals: [
	  { name: 'cats', favorite: true },
	  { name: 'dogs', favorite: true },
	  { name: 'tree frogs', favorite: true },
	  { name: 'earth worms', favorite: false },
	  { name: 'guinea pigs', favorite: true },
	]
	};
	response.render('fav_animals.hbs', context); 
});



app.listen(8000, function () {
  console.log('Listening on port 8000');
});







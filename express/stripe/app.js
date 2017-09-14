var express = require('express');
var app = express();
var axios = require('axios');



app.set('view engine', 'hbs');

app.use('/static', express.static('public'));

app.get('/payment', function (request, response) {
  response.render('payment.hbs', {});
});


app.listen(8000, function(){
  console.log('I am awakining... I am listeninging... I am now sentient... Hello')
});
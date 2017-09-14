var express = require('express');
var app = express();
var stripe = require("stripe")(keySecret);


var keyPublishable = process.env.PUBLISHABLE_KEY;
var keySecret = process.env.SECRET_KEY;


app.set('view engine', 'hbs');

app.use('/static', express.static('public'));

app.get("/payment", (request, response) =>
  response.render('payment', {keyPublishable}));

app.post("/charge", (request, response) => {
  let amount = 500;

  stripe.customers.create({
     email: request.body.stripeEmail,
    source: request.body.stripeToken
  })
  .then(customer =>
    stripe.charges.create({
      amount,
      description: "Sample Charge",
         currency: "usd",
         customer: customer.id
    }))
  .then(charge => response.render("charge"));
});


app.listen(8000, function(){
  console.log('I am awakining... I am listeninging... I am now sentient... Hello')
});
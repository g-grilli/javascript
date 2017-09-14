// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
Stripe.apiKey = "sk_test_BQokikJOvBiI2HlWgH4olfQ2";

// Token is created using Stripe.js or Checkout!
// Get the payment token submitted by the form:
String token = request.getParameter("stripeToken");

// Charge the user's card:
Map<String, Object> params = new HashMap<String, Object>();
params.put("amount", 1000);
params.put("currency", "usd");
params.put("description", "Example charge");
params.put("source", token);

Charge charge = Charge.create(params);
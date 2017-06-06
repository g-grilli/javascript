/* jQuery Promise Example*/

var api_url = 'https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6';
var jqxhr = $.ajax(api_url)
  .done(function(data) {
    console.log(data);
  })
  .fail(function(jqXHR, textStatus, errorThrown) {
    console.error(errorThrown);
  })
  .always(function() {
    console.log("complete");
  });

 /*  Fetch Example*/ 
var myHeaders = new Headers();
var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' };
fetch(api_url, myInit)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  })
  .catch(function (error) {
    console.error(error);
  });

/* reccomended way to use promises, cuts down on code */
  axios.get(api_url)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

  
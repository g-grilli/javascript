function fix_name (name) {
  var promise = new Promise(function (resolve, reject) {
    try {
      var new_name = name.replace('-', ' ');
      resolve(new_name);
    } catch (error) {
      reject(error);
    }
  });
  return promise;
}

var p1 = fix_name(678);
var p2 = fix_name('johnny')
Promise.all([p1, p2])
p.
  .then(function(name) {
	console.log(name);
});
  catch(function(e) {
	console.log(e);
});
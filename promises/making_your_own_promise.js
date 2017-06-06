var p = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve('Hello');
  }, 3000);
});
p.then(function (value) {
  console.log('DONE: ', value);
});

var p = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject(':(');
    if (sucessneshnode making)
  }, 3000);
});
p
.then(function (value) {
  console.log('DONE: ', value);
})
.catch(function(error) {
	console.error('ERROR', error);
});
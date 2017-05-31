var fp = require('lodash');

fp.shuffle([1,2,3,4]);

fp.max([1,2,33,4,5,6]);

var users = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 36 },
  { 'user': 'fred',   'age': 40 },
  { 'user': 'barney', 'age': 34 }
];

fp.sortBy(users, [function(o) { return o.user; }]);


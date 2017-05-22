// Given an array of strings such the array of names given 
// in the previous problem, sort them by alphabetically order.

var people = [
  'Dom',
  'Lyn',
  'Kirk',
  'Autumn',
  'Trista',
  'Jesslyn',
  'Kevin',
  'John',
  'Eli',
  'Juan',
  'Robert',
  'Keyur',
  'Jason',
  'Che',
  'Ben'
];

people.sort(function(x, y) {
	if (x.length > y.length) { return 1; }
  else if (x.length < y.length) { return -1; }
  return 0;
});


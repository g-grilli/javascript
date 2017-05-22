// Given an array of people's names:
// Print out 'Good Job, {{name}}!' for each person's name, 
// one on a line.


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

people.forEach(function(item){
	console.log("Good Job! " + item)
}); 


// function goodJob (n) {
//   console.log("Good Job! " + n);
// }
// var gjn = people.map(goodJob)
// this puts into new array


// Write a function which takes an array of city objects like 
// such:
// var cities = [
  // { name: 'Los Angeles', temperature: 60.0},
  // { name: 'Atlanta', temperature: 52.0 },
  // { name: 'Detroit', temperature: 48.0 },
  // { name: 'New York', temperature: 80.0 }
  // ];
// as input and returns a new array containing the cities whose 
// temperature is cooler than 70 degrees.

var cities = [
  { name: 'Los Angeles', temperature: 60.0},
  { name: 'Atlanta', temperature: 52.0 },
  { name: 'Detroit', temperature: 48.0 },
  { name: 'New York', temperature: 80.0 }
];

cities.filter(function(item) {
	return item.temperature < 70;
});
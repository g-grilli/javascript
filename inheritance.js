/* Given the following objects: 
var mom = {
  firstName: 'Alice',
  lastName: 'Wong',
  eyeColor: 'brown',
  hairColor: 'black'
};
var daughter = {
  firstName: 'Ilene',
  hairColor: 'brown'
};

1. Write code to make daughter inherit properties from mom. 
   What are the daugther's properties and their values? 
   Print them out.

2. Add a method called showInfo to mom by attaching a function to 
   it as a property. Calling this method will print out all four 
   roperties. Call this method on both mom and daugther. */

var mom = {
  firstName: 'Alice',
  lastName: 'Wong',
  eyeColor: 'brown',
  hairColor: 'black',
  showInfo: function() {
  	console.log(`${this.firstName} ${this.lastName} ${this.eyeColor} ${this.hairColor}`);
  }
};

var daughter = {
  firstName: 'Ilene',
  hairColor: 'brown'
};

daughter.__proto__ = mom;
console.log(daughter);
mom.showInfo();
daughter.showInfor();

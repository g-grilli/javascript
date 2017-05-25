 /* Given this Person type:

function Person(name) {
  this.name = name;
  this.friends = [];
}

Person.prototype.addFriend = function(friend) {
  this.friends.push(friend);
};

Person.prototype.createGreeting = function(other) {
  return 'Yo ' + other.name + '! from ' + this.name + '.';
};

Person.prototype.greet = function(other) {
  console.log(this.createGreeting(other));
};


Rewrite the above type as a class. */

class Person {
	constructor(name, friends) {
		this.name = name;
		this.friends = [];
	}	
		addFriend(other) {
			this.friends.push(other);
		}
		createGreeting(other) {
			return 'Yo ' + other.name + '! from ' + this.name + '.';	
		}
		greet(other) {
			console.log(this.createGreeting(other));
		}
}


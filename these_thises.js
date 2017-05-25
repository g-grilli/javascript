/* Given the Person type given in the last problem, 
add to it a lazyGreet method which will print out the 
same greeting message but only after 2 seconds. */
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
		lazyGreet(other) {
			setTimeout(function() {
				console.log(greet(other));
		}, 2000);
		}
}


var alfie = new Person('Alfie');

var anushka = new Person('Anushka');

var henrique = new Person('Henrique');

alfie.addFriend(anushka);

alfie.addFriend(henrique);

alfie.createGreeting(henrique);

alfie.createGreeting(anushka);

alfie.greet(henrique);

alfie.greet(anushka);

alfie.lazyGreet(anushka)
function greet(thing1, thing2) {
    console.log(this + " says greetings, " + thing1);
    console.log("But " + thing2 + " doesn't like " + this);
}
var boundGreeting = greet.bind('Noah');
boundGreeting('Christian', 'Ben');
// Noah says greetings, Christian
// But Ben doesn't like Noah
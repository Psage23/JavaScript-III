/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global binding puts the value of "this" in the global scope, found in the window/console object.
* 2. Implicit binding is called by a preceding dot and the object to the left of the dot gets "this".
* 3. New binding refers to object that was created and returned by the constructor function.
* 4. Explicit binding refers "this" to call or apply methods.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding

function rainbowColors(color) {
    console.log(this);
    return color;
}
rainbowColors("red");

// Principle 2
// code example for Implicit Binding

let mySchool = {
    name: 'Acacia Elementary',
    mascot: 'Owls',
    school: function(){
    console.log(this.mascot);
    }
}
mySchool.school(); 

// Principle 3
// code example for New Binding
function Show(favorite){
    this.Show = favorite;
}
let myFavoriteShow = new Show('Big Bang Theory');

console.log(`My favorite show is ${myFavoriteShow.Show}.`);

// Principle 4
// code example for Explicit Binding

function football(){
    console.log(this.mascot);
    }
    
    let myTeam = {
        name: 'Oklahoma Sooners',
        mascot: 'Boomer Sooner'
    }
    
    let otherTeam = {
        name: 'Oklahoma State',
        mascot: 'Cowboys'
    }
    
    football.call(myTeam); 
    football.call(otherTeam);
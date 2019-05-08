/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding: The 'this' keyword will refer to an object in the global scope (ex. window object)
* 2. Implicit Binding: The 'this' keyword will refer to the object after the '.' (ex. this.cars)
* 3. New Binding: The 'new' keyword will create a new object (ex. new greeting())
* 4. Explicit Binding: Used to refer to a specific object for constructor functions (ex. .call(), .bind(), .apply())
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
const school = (name) => {
    console.log(this);
    return name;
}

school();

// Principle 2

// code example for Implicit Binding


    const bootcamps = {
        name: 'Lambda School',
        cohort: 'Web20',
        greeeting: function (name) {
            console.log(`Welcome to ${this.name}, you are currently enrolled in ${this.cohort}`);
            console.log(this);
    } 
}

bootcamps.greeting();

// Principle 3

// code example for New Binding

const announce = new greeting();


// Principle 4

// code example for Explicit Binding


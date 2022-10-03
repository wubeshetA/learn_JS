#!/usr/bin/node
// A script that shows concept of destructuring in javascript

// destructuring is a convenient way of creating a new variable by exptracting values from 
// objects or arrays.

// destructuring on arrays

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F']
// const [a,b] = alphabet;
// console.log(a, b);

const [a, b, ...rest] = alphabet;
console.log(rest);


// destructuring on objects
const someone = {
    firstName: "Nick",
    lastName: "Anderson",
    age: 35,
    sex: "M"
  }

//   Without destructuring
/*
const first = person.firstName;
const age = person.age;
const city = person.city || "Paris";
*/
// With destructuring, all in one line:

const {firstName:first, age, sex} = someone;
console.log("==========object destructuring==========")
console.log(first, age, sex)
console.log("========================================")

const person =  {
    name : 'John',
    age: 21,

    address : {
        city: "Bahir dar",
        state: "Amhara"
    }
};

//  passing destructured variables as parameters in arrow functions
const caller = ({name, age, address: {city}}) => {
    console.log(name, age, city)
}
caller(person);


// combining two objects

const personOne = {
    name : 'John',
    age : 21,
}

const personTwo = {
    age: 25,
    address : {
        city : "Bahir dar",
        state : "Amhara",
    }
};

// combines personOne and personTwo, but personTwo overwrites personOne info.
const personThree  = {...personOne, ... personTwo}
console.log("==============")
console.log(personThree)


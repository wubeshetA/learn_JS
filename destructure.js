#!/usr/bin/node
// A script that shows concept of destructuring in javascript

// destructuring on arrays

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F']
// const [a,b] = alphabet;
// console.log(a, b);

const [a, b, ...rest] = alphabet;
console.log(rest);
const person =  {
    name : 'John',
    age: 21,
};

const caller = ({name, age}) => {
    console.log(name, age)
}
caller(person);
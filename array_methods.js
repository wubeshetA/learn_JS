#!/usr/bin/node

// Compute total grade sum for students with grades 10 or above by composing map, filter and reduce:

const students = [
    { name: "Nick", grade: 10 },
    { name: "John", grade: 15 },
    { name: "Julia", grade: 19 },
    { name: "Nathalie", grade: 9 },
  ];

const gradeSum = students
.map(student => student.grade)
.filter((grade) => grade >= 10)
.reduce((prev, next) => (prev + next));

console.log(gradeSum);


// spread operator (...)

array1 = [1,2,3,4]
array2 = [ 'a', 'b',...array1, 'c', 'd','e']
console.log(array2);
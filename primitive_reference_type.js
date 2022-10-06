#!/usr/bin/node

"This script show the difference between primitive and reference types"
/*
Primitive/ Value types: are copied by their value
- String
- Number
- Boolean
- symbol
- undefined
- null
*/
let x = 5; // the variable 'x' stores the value '5'
let y = x; // y = 5
x = 6;
console.log(y) // 5 -> it's not 6 

/*
Reference types: are copied by their reference (which is memory address value)
- Object
- Array
- Function
*/
let obj = {value: 5}; // the variable 'obj' stores a reference (memory address
                        // of the value it stored).
let another = obj // here another stores the same value as obj which is
                    // the reference to the value that obj stores. This way both
                    //another and obj point to the same memory address.
obj.value = 6;
console.log(another.value) 

// ========= Another example ======================
console.log('============another example ===============')

let number = 10; // number is primitive type
function increase (number) {
    number ++;
}

increase(number);
console.log(number) // 10 

//  ================== BUT ================
let object = {value: 10}
function increaseObject (obj) {
    obj.value ++;
}
increaseObject(object);
console.log(object.value) // 11

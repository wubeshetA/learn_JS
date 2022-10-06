#!/usr/bin/node
"This script shows two ways of creating an object using functions"
// In javascript functions are objects.

// Factory Function
function createCircle(radius) {
    return {
        radius,
        draw: function (){
            console.log("Draw circle.")
        }
    }
}

const circle = createCircle(2);
circle.draw();
// Constructor Function
// rules: Function name starts with upper case.
// when creating a new object, we use the 'new' keyword (look the example below)

function Circle (radius) {
    this.radius = radius,
    this.draw = function () {
        console.log("Draw circle.")
    };
}

const anotherCircle = new Circle(3);
anotherCircle.draw();

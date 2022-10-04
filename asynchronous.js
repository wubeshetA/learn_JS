#!/usr/bin/node

/*
Asynchronous programming - continuing excuting a programming while a section
of the code is running in the background. Not waiting until a function finishes
excution.

Synchronous programming - exucting a programm step by step. waiting until a
function finishes excution and continuing the next section of code.
*/

// the following peice of code demonstrates Asynchronous Programming with callback

let posts = [
    {title: "Post one", body: "This is post one"},
    {title: "Post two", body: "This is post two"}
];

// Get posts
function getPost () {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

createPost({'title': 'Post three', 'body': 'This is post three'}, getPost);

// How to use promise for Asynchronous is shown in promise.js file in current directory
#!/usr/bin/node

/*
Asynchronous programming - continuing excuting a programming while a section
of the code is running in the background. Not waiting until a function finishes
excution.

Synchronous programming - exucting a programm step by step. waiting until a
function finishes excution and continuing the next section of code.
*/

// the following peice of code demonstrates Asynchronous Programming with promise

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

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if (!error) {
                resolve();
            } else {
                reject("Something went wrong");
            }
        }, 2000);
    });
}

/*
createPost({'title': 'Post three', 'body': 'This is post three'})
.then(getPost)
.catch(err => console.log(err));


// fetch request

const res = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

console.log(res);
*/

// =============== async | await =============================


// async function init(){
//     await createPost({'title': 'Post three', 'body': 'This is post three'})
//     getPost();
// }

// init();


// ====================== async | await | fetch request =================

async function getUser(){
    let res  = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();
    console.log(data);
}
getUser();

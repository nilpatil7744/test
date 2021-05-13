function GET1() {


    fetch('http://jsonplaceholder.typicode.com/albums').then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Something went wrong');
        }
    })
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        });



}
function GET2() {


    fetch('http://jsonplaceholder.typicode.com/todos').then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Something went wrong');
        }
    })
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        });



}

function GET3() {


    fetch('http://jsonplaceholder.typicode.com/users').then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Something went wrong');
        }
    })
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        });



}

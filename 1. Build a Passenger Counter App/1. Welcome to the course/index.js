// javascript

let count = document.getElementById("count");
let increment = document.getElementById("btn1");
let save = document.getElementById("btn2");
let initialValue = 0;

function increment1(){
    count.innerText = initialValue ++;
}

function reset(){
    count.innerText = 0;
}
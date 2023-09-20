

document.querySelector("h1").innerText += " from JS";

document.getElementById('title').style.color = 'red';

console.log("Hello world")

changeTitle();

function changeTitle(){
    const title = document.getElementById("title")
    title.innerText='from 35'
    title.style.color = 'red'
}
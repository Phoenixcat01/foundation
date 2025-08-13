// DOM selection
// document.getElementById
const title = document.getElementById('judul')
judul.style.backgroundColor = "salmon";
judul.innerHTML = "rifantara"

// document.getElementsByTagName
const p = document.getElementsByTagName('p');
p[0].style.color = "white";
for (i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = "lightgreen";
}
const h1 = document.getElementsByTagName('h1');
h1[0].style.border = "5px solid black";

// document.getElementsByClassName
const p2 = document.getElementsByClassName('p2');
p2[0].style.border = "5px solid black";

// document.getQuerySelection
const list = document.querySelector('ul li:nth-child(3)');
list.style.backgroundColor = "lightblue";

// document.querySelectorAll('');
const ul = document.querySelectorAll('section#b ul li');
ul[2].style.border = "3px dashed black";
for (i=0; i<ul.length-1; i++) {
    ul[i].style.border = "2px dashed lightgreen";
}


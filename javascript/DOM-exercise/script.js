// #######################
// DOM selection
// #######################
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
const li = document.querySelectorAll('section#b ul li');
li[2].style.border = "3px dashed black";
for (i=0; i<li.length-1; i++) {
    li[i].style.border = "2px dashed lightgreen";
}



// ########################
// DOM manipulation
// ########################

// element.innerhtml
li[0].innerHTML = `<a href="instagram.com">link ini dibuat dengan js</a>`;
const sectionATagA = document.querySelector('section#a a');
sectionATagA.href = "https://www.instagram.com/rifantara_";
sectionATagA.target = "_blank";
sectionATagA.rel = "noopener noreferrer";
sectionATagA.textContent = "link ini dibuat dengan js";
// element.style.<property>
li[0].style.backgroundColor = "lightyellow";
// element.setAttribute()
const linkUlLi = document.querySelector('section#b ul li a');
linkUlLi.setAttribute('href', 'https://www.instagram.com/rifantara_');
linkUlLi.setAttribute('target', '_blank');
linkUlLi.setAttribute('rel', 'noopener noreferrer');
// element.getAttribute()
const linkUlLiHref = linkUlLi.getAttribute('href');
console.log(linkUlLiHref);
// element.classList
const linkUlLiClass = linkUlLi.classList;
console.log(linkUlLiClass);
// element.classList.add()
linkUlLiClass.add('link');
// element.classList.remove()
linkUlLiClass.remove('link');
// element.classList.toggle()
linkUlLiClass.toggle('link');
// element.classList.contains()
const linkUlLiContains = linkUlLiClass.contains('link');
console.log(linkUlLiContains);
// element.classList.replace()
linkUlLiClass.replace('link', 'link2');
// .. and more

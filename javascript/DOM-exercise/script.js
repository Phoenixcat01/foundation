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
const li1= document.querySelectorAll('section#b ul li');
li1[2].style.border = "3px dashed black";
for (i=0; i<li1.length-1; i++) {
    li1[i].style.border = "2px dashed lightgreen";
}



// ########################
// DOM manipulation
// ########################

// Manipulation Element ###
// element.innerhtml
li1[0].innerHTML = `<a href="instagram.com">link ini dibuat dengan js</a>`;
const sectionATagA = document.querySelector('section#a a');
sectionATagA.href = "https://www.instagram.com/rifantara_";
sectionATagA.target = "_blank";
sectionATagA.rel = "noopener noreferrer";
sectionATagA.textContent = "link ini dibuat dengan js";
// element.style.<property>
li1[0].style.backgroundColor = "lightyellow";
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

// Manipulation Node ###
// document.createElement()
const newLi = document.createElement('li');
// document.createTextNode()
const newText = document.createTextNode('ini adalah text baru dari document.createTextNode()');
// node.appendchild()
newLi.appendChild(newText);
// node.insertBefore()
const ul = document.querySelector('section#b ul');
ul.insertBefore(newLi, ul.children[0]);
// parentNode.removeChild()
const li = document.querySelector('section#b ul li');
li.parentNode.removeChild(li);
// parentNode.replaceChild()
// const newLi2 = document.createElement('li');
// const newText2 = document.createTextNode('ini adalah text baru');
// newLi2.appendChild(newText2);
// ul.replaceChild(newLi2, ...h1);
// node.cloneNode()
const newLi3 = newLi.cloneNode(true);
ul.appendChild(newLi3);
// node.hasChildNodes()
const newLi4 = document.createElement('li');
const newText4 = document.createTextNode('ini adalah text baru dari node.hasChildNodes()');
newLi4.appendChild(newText4);
const newLi5 = newLi4.cloneNode(true);
ul.appendChild(newLi5);
console.log(ul.hasChildNodes());
// node.contains()
const newLi6 = document.createElement('li');
const newText6 = document.createTextNode('ini adalah text baru dari node.contains()');
newLi6.appendChild(newText6);
const newLi7 = newLi6.cloneNode(true);
ul.appendChild(newLi7);
console.log(ul.contains(newLi7));
// node.compareDocumentPosition()
const newLi8 = document.createElement('li');
const newText8 = document.createTextNode('ini adalah text baru dari node.compareDocumentPosition()');
newLi8.appendChild(newText8);
const newLi9 = newLi8.cloneNode(true);
ul.appendChild(newLi9);
console.log(ul.compareDocumentPosition(newLi9));
// node.isSameNode()
const newLi10 = document.createElement('li');
const newText10 = document.createTextNode('ini adalah text baru dari node.isSameNode()');
newLi10.appendChild(newText10);
const newLi11 = newLi10.cloneNode(true);
ul.appendChild(newLi11);
console.log(newLi10.isSameNode(newLi11));
// node.normalize()
const newLi12 = document.createElement('li');
const newText12 = document.createTextNode('ini adalah text baru dari node.normalize()');
newLi12.appendChild(newText12);
const newLi13 = newLi12.cloneNode(true);
ul.appendChild(newLi13);
newLi13.normalize();
// node.isSupported()
// const newLi14 = document.createElement('li');
// const newText14 = document.createTextNode('ini adalah text baru dari node.isSupported()');
// newLi14.appendChild(newText14);
// const newLi15 = newLi14.cloneNode(true);
// ul.appendChild(newLi15);
// console.log(newLi15.isSupported('HTMLLIElement', 'supportsFocus'));
// node.getRootNode()
const newLi16 = document.createElement('li');
const newText16 = document.createTextNode('ini adalah text baru dari node.getRootNode()');
newLi16.appendChild(newText16);
const newLi17 = newLi16.cloneNode(true);
ul.appendChild(newLi17);
console.log(newLi17.getRootNode());
// node.getRootNode().host
const newLi18 = document.createElement('li');
const newText18 = document.createTextNode('ini adalah text baru dari node.getRootNode().host');
newLi18.appendChild(newText18);
const newLi19 = newLi18.cloneNode(true);
ul.appendChild(newLi19);
console.log(newLi19.getRootNode().host);
// node.getRootNode().isConnected
const newLi20 = document.createElement('li');
const newText20 = document.createTextNode('ini adalah text baru dari node.getRootNode().isConnected');
newLi20.appendChild(newText20);
const newLi21 = newLi20.cloneNode(true);
ul.appendChild(newLi21);
console.log(newLi21.getRootNode().isConnected);
// node.getRootNode().isConnectedNode
const newLi22 = document.createElement('li');
const newText22 = document.createTextNode('ini adalah text baru dari node.getRootNode().isConnectedNode');
newLi22.appendChild(newText22);
const newLi23 = newLi22.cloneNode(true);
ul.appendChild(newLi23);
console.log(newLi23.getRootNode().isConnectedNode);
// node.getRootNode().isConnectedShadowRoot
const newLi24 = document.createElement('li');
const newText24 = document.createTextNode('ini adalah text baru dari node.getRootNode().isConnectedShadowRoot')
newLi24.appendChild(newText24);
const newLi25 = newLi24.cloneNode(true);
ul.appendChild(newLi25);
console.log(newLi25.getRootNode().isConnectedShadowRoot);
// node.getRootNode().hostname
const newLi26 = document.createElement('li');
const newText26 = document.createTextNode('ini adalah text baru dari node.getRootNode().hostname');
newLi26.appendChild(newText26);
const newLi27 = newLi26.cloneNode(true);
ul.appendChild(newLi27);
console.log(newLi27.getRootNode().hostname);
// node.getRootNode().href
const newLi28 = document.createElement('li');
const newText28 = document.createTextNode('ini adalah text baru dari node.getRootNode().href');
newLi28.appendChild(newText28);
const newLi29 = newLi28.cloneNode(true);
ul.appendChild(newLi29);
console.log(newLi29.getRootNode().href);
// node.getRootNode().origin
const newLi30 = document.createElement('li');
const newText30 = document.createTextNode('ini adalah text baru dari node.getRootNode().origin');
newLi30.appendChild(newText30);
const newLi31 = newLi30.cloneNode(true);
ul.appendChild(newLi31);
console.log(newLi31.getRootNode().origin);
// node.getRootNode().protocol
const newLi32 = document.createElement('li');
const newText32 = document.createTextNode('ini adalah text baru dari node.getRootNode().protocol');
newLi32.appendChild(newText32);
const newLi33 = newLi32.cloneNode(true);
ul.appendChild(newLi33);
console.log(newLi33.getRootNode().protocol);
// node.getRootNode().pathname
const newLi34 = document.createElement('li');
const newText34 = document.createTextNode('ini adalah text baru dari node.getRootNode().pathname');
newLi34.appendChild(newText34);
const newLi35 = newLi34.cloneNode(true);
ul.appendChild(newLi35);
console.log(newLi35.getRootNode().pathname);
// node.getRootNode().search
const newLi36 = document.createElement('li');
const newText36 = document.createTextNode('ini adalah text baru dari node.getRootNode().search');
newLi36.appendChild(newText36);
const newLi37 = newLi36.cloneNode(true);
ul.appendChild(newLi37);
console.log(newLi37.getRootNode().search);
// node.getRootNode().hash
const newLi38 = document.createElement('li');
const newText38 = document.createTextNode('ini adalah text baru dari node.getRootNode().hash');
newLi38.appendChild(newText38);
const newLi39 = newLi38.cloneNode(true);
ul.appendChild(newLi39);
console.log(newLi39.getRootNode().hash);
// event handler
// inline HTML attribute
const sectionA = document.querySelector('section#a');
const sectionB = document.querySelector('section#b');
const p1 = sectionA.querySelector('.p1')
function changeBgColor() {
    this.style.backgroundColor = 'lightBlue';
};
// method element
const p2 = sectionA.querySelector('.p2');
p2.onclick = changeBgColor;
// addEventListener()
const p3 = sectionA.querySelector('.p3');
// p3.addEventListener('mouseenter', changeBgColor)
// addEventListener() with capture phase
p3.addEventListener('click', changeBgColor, true);

const p4 = sectionB.querySelector('p');
const ul = sectionB.querySelector('ul');
p4.innerHTML = 'Add item';
p4.addEventListener('click', function() {
    const existingItems = ul.querySelectorAll('li');
    const newItemNumber = existingItems.length + 1;
    const newLi = document.createElement('li');
    const newTeksLi = document.createTextNode(`New item ${newItemNumber}`);
    newLi.appendChild(newTeksLi);
    ul.appendChild(newLi);
})

const p5 = document.createElement('p');
const textContent = document.createTextNode('Clear item');
p5.appendChild(textContent);
sectionB.prepend(p5);
p5.addEventListener('click', function() {
    const allItemUl = ul.querySelectorAll('li');
    if(allItemUl.length > 0) {
        const endItem = allItemUl[allItemUl.length-1];
        endItem.remove();
    } else {
        alert('all item has removed')
    }
})

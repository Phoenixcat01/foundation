// feature change colors button
const bChangeColors = document.getElementById('bChangeColors');
bChangeColors.addEventListener('click', function() {
    document.body.classList.toggle('cadetBlue')
});

// feature Random colors button
const bRandomColors = document.createElement('button');
const bRandomColorsText = document.createTextNode('Random Colors');
bRandomColors.appendChild(bRandomColorsText);
bRandomColors.setAttribute('type', 'button');
bChangeColors.after(bRandomColors);

bRandomColors.addEventListener('click', function() {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});

// feature change colors with input sliders
const inputRed = document.querySelector('input[name=inputRed]');
const inputGreen = document.querySelector('input[name=inputGreen]');
const inputBlue = document.querySelector('input[name=inputBlue]');

inputRed.addEventListener('input', function() {
    const r = inputRed.value;
    const g = inputGreen.value;
    const b = inputBlue.value;
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});
inputGreen.addEventListener('input', function() {
    const r = inputRed.value;
    const g = inputGreen.value;
    const b = inputBlue.value;
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});
inputBlue.addEventListener('input', function() {
    const r = inputRed.value;
    const g = inputGreen.value;
    const b = inputBlue.value;
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});

// feature change colors with mouse movement
document.body.addEventListener('mousemove', function(e) {
    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    const yPos = Math.round((event.clientY / window.innerHeight) * 255);
    document.body.style.backgroundColor = `rgb(${xPos},${yPos}, 50)`;
});

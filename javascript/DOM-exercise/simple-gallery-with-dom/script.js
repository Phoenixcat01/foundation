const container = document.querySelector('.container');
const jumbo = container.querySelector('.jumbo-thumbnail')

container.addEventListener('click', function(e) {
    if (e.target.className == 'thumbnail') {
        jumbo.src = e.target.src;
        jumbo.classList.add('fade')
        setTimeout(function() {
            jumbo.classList.remove('fade')
        }, 300)
    }
})
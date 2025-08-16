const container = document.querySelector('.container');
const jumbo = container.querySelector('.jumbo-thumbnail')
const thubnails = container.querySelectorAll('.thumbnail')

container.addEventListener('click', function(e) {
    if (e.target.className == 'thumbnail') {
        jumbo.src = e.target.src;
        jumbo.classList.add('fade')
        setTimeout(function() {
            jumbo.classList.remove('fade')
        }, 300)

        thubnails.forEach(function(thumbnail) {
            thumbnail.className = 'thumbnail';
        })
        e.target.classList.add('active')
    }
})
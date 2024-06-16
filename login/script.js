var btn = document.querySelector('#hide2')
var container = document.querySelector('.container')

btn.addEventListener('click', function() {

    if(container.style.display === 'flex') {
       container.style.display = 'none';
    } else {
       container.style.display = 'flex';
     }
})

var btn = document.querySelector('#hide')
var container2 = document.querySelector('.container2')

btn.addEventListener('click', function() {

    if(container.style.display === 'none') {
       container.style.display = 'flex';
    } else {
       container2.style.display = 'flex';
     }
})



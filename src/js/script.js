let burger = document.querySelector('.burger');
let header = document.querySelector('.header-content');
let headerMain = document.querySelector('.header');
let closeBtn = document.querySelector('.close-btn');

burger.addEventListener('click', function() {
    burger.classList.toggle('active');
    header.classList.toggle('active');
    headerMain.classList.toggle('active');
    closeBtn.classList.add('active');
});

closeBtn.addEventListener('click', function() {
    burger.classList.remove('active');
    header.classList.remove('active');
    headerMain.classList.remove('active');
    closeBtn.classList.remove('active');
});

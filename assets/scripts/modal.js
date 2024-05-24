/*let myButton = document.querySelector('#myBtn')
let modalContent = document.querySelector('.modal-' +
    'content');
let backdrop = document.querySelector('.backdrop');
let close = document.querySelector('.close');

myButton.addEventListener('click', openModal);
close.addEventListener('click', closeModal);
document.addEventListener('click', function (element){

    if (element.target === backdrop) {
        closeModal();
    }
});

document.addEventListener('keydown', function (key){
    if(key.key === 'Escape') {
        closeModal()
    }
});

function openModal() {
    console.log("open modal")
    backdrop.style.display = 'block';
}

function closeModal(){
    console.log("close modal")
    backdrop.style.display = 'none';
}

 */
let myButton = document.querySelector('#myBtn');
let modal = document.querySelector('.modal');
let close = document.querySelector('.close');

myButton.addEventListener('click', openModal);
close.addEventListener('click', closeModal);
document.addEventListener('click', function (event){
    if (event.target === modal) {
        closeModal();
    }
});

document.addEventListener('keydown', function (event){
    if(event.key === 'Escape') {
        closeModal();
    }
});

function openModal() {
    console.log("open modal");
    modal.style.display = 'block';
}

function closeModal(){
    console.log("close modal");
    modal.style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.getElementById("menu");

    menuToggle.addEventListener("click", function() {
        menu.classList.toggle("show");
    });
});
const menuA = document.querySelector('.drop');
const burg = document.querySelector('.burg');

const menuF = document.querySelector('.filterDD');
const fill = document.querySelector('.filter');

const menuSize = document.querySelector('.size');
const size = document.querySelector('.sizeB');

function toggleM() {
    menuA.classList.toggle('dropH');
}

function toggleFil() {
    menuF.classList.toggle('dropF');
}

function toggleSize() {
    menuSize.classList.toggle('sizeH');
}

burg.addEventListener('click', toggleM);
fill.addEventListener('click', toggleFil);
size.addEventListener('click', toggleSize);
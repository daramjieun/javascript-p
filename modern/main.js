const open = document.querySelector('#open');
const close = document.querySelector('#close');
const modalBox = document.querySelector('#modal-box');

open.addEventListener("click", () => {
    modalBox.classList.toggle("active");
});
close.addEventListener("click", () => {
    modalBox.classList.toggle("active");
});

const modalOneOpen = document.getElementById('image-button-one');
const modalOneContainer = document.getElementById('modal-one-container');
const modalOneClose = document.getElementById('modal-one-close');
modalOneOpen.addEventListener('click', () => {
    modalOneContainer.classList.add('show');
});
modalOneClose.addEventListener('click', () => {
    modalOneContainer.classList.remove('show');
});

const modalTwoOpen = document.getElementById('image-button-two');
const modalTwoContainer = document.getElementById('modal-two-container');
const modalTwoClose = document.getElementById('modal-two-close');
modalTwoOpen.addEventListener('click', () => {
    modalTwoContainer.classList.add('show');
});
modalTwoClose.addEventListener('click', () => {
    modalTwoContainer.classList.remove('show');
});
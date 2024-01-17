const elShowBtn = document.querySelector('.show-btn');
const elModal = document.querySelector('.modal');
const elCloseBtn = document.querySelector('.close-btn');
const elOverlay = document.querySelector('.overlay');


//hide modal function 
const removeModal = () => {
    elModal.classList.add('hidden');
    elOverlay.classList.add('hidden');
}
//remove hidden classlist

const removeHidden = () => {
    elModal.classList.remove('hidden');
    elOverlay.classList.remove('hidden');
}


elShowBtn.addEventListener('click', removeHidden)
elCloseBtn.addEventListener('click', removeModal)
elOverlay.addEventListener('click', removeModal)

document.addEventListener('keydown', (e) => {
    if (e.key == 'Escape') {
        removeModal();
    }
})
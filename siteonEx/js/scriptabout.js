const modal = document.querySelector('dialog');
const modalBox = document.getElementById('modal-box');
const showModalBtn = document.getElementById('show-modal-btn');
const closeModalBtn = document.getElementById('close-modal-btn');

const showHide = document.querySelector('#buttonShowHide');
const buttonRazv = document.querySelector('.bottm');
const openHide = document.querySelector('.feach-items');
const hid = document.querySelectorAll('.hid');
const razv = false;

let isModalOpen = false

showModalBtn.addEventListener('click', (e) => {
    modal.showModal()
    isModalOpen = true
    e.stopPropagation()
})

closeModalBtn.addEventListener('click', () => {
    modal.close()
    isModalOpen = false
})
  
document.addEventListener('click', (e) => {
    if (isModalOpen && !modalBox.contains(e.target)) {
      modal.close();
    }
})

showHide.addEventListener('click', (e) => {
    hid.forEach((item) => {
        item.classList.toggle('hide');
        if (!item.classList.contains('hide')) {
            buttonRazv.innerHTML = '<div class="ap__button-close"></div>Свернуть';
        } else {
            buttonRazv.innerHTML = '<div class="ap__button-open"></div>Развернуть';
        }
    })
})
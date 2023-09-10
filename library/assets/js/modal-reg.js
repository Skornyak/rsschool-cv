const openModalreg = document.querySelector('.entrance__register');
const modalReg = document.querySelector('.modal__reg');
const closeButton = document.querySelector('.modal__reg_btn')

const reg = () => {
  modalReg.classList.toggle('open');
}

const closeReg = () => {
  modalReg.classList.remove('open');
}

openModalreg.addEventListener('click', reg);

closeButton.addEventListener('click', closeReg);

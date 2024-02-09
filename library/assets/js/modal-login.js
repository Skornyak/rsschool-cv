const buttonOpen = document.querySelector('.entrance__menu_btn');
const modalLogin = document.querySelector('.modal__login');
const buttonClose = document.querySelector('.modal__login_btn');

const modal = (event) => {
 modalLogin.classList.toggle('open');
  event.isClick = true;
};

const closeModal = () => {
  modalLogin.classList.remove('open');

}

buttonOpen.addEventListener('click', modal);

buttonClose.addEventListener('click', closeModal)

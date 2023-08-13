const menuBurger = document.querySelector('.burger__button');
const headerNavList = document.querySelector('.nav__list');

const toggleMenu = () => {
  menuBurger.classList.toggle('burger--button-active');
  menuBurger.classList.toggle('opened');
  headerNavList.classList.toggle('visible');
}

menuBurger.addEventListener('click', toggleMenu);

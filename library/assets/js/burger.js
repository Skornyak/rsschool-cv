const menuBurger = document.querySelector('.burger__button');
const headerNavList = document.querySelector('.nav__list');

const toggleMenu = (event) => {
  event.isClick = true;
  menuBurger.classList.toggle('burger--button-active');
  menuBurger.classList.toggle('opened');
  headerNavList.classList.toggle('visible');
}

document.body.addEventListener('click', function() {
  if (event.isClick == true) {
    return
  }
  menuBurger.classList.remove('burger--button-active');
  menuBurger.classList.remove('opened');
  headerNavList.classList.remove('visible');
})


menuBurger.addEventListener('click', toggleMenu);

const dropMenu = document.querySelector('.entrance__button');
const entranceMenu = document.querySelector('.entrance__menu');
const body = document.querySelector('.body');

const menu = (event) => {
  entranceMenu.classList.toggle('entrance__menu-active');
  event.isClick = true;
}

document.body.addEventListener('click', function() {
  if (event.isClick == true) {
    return
  }
  entranceMenu.classList.remove('entrance__menu-active');
})

dropMenu.addEventListener('click', menu);




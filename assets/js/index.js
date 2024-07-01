const changeThemBtn = document.querySelector('.change__them_btn');
const body = document.querySelector('.body');

const addClass = () => {
    body.classList.toggle('day-them')
};

changeThemBtn.addEventListener('click', addClass);
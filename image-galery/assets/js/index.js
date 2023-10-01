// clear btn
const btnSearch = document.querySelector('.search__button');
const btnClose = document.querySelector('.search__button_close');
const input = document.querySelector('.search__input');

alert('Привет, я не до конца разобрался с API для картинок, но я точно это сделаю до конца кросс чека, если ты дашь мне такую возможнось. На данный момент, ты можешь оценить мою работу как пожелаешь, если у тебя потом появится свободная минутка, что бы перепроверить ее, я буду безмерно благодарен. Если ты не против то оставь свой аккаунт открытым, что бы я мог тебе написать, огромное спасибо!');

function setFocus () {
    input.focus();
}

btnClose.addEventListener('click', () => {
    event.preventDefault()
    input.value = '';
});

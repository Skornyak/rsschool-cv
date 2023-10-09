const AUTHORIZATION = 'userAuthorization'

const user  = JSON.parse(localStorage.getItem(AUTHORIZATION));

const userButton = document.querySelector('button.entrance__button');

userButton.innerHTML= `<div class="loggined">${user?.firstName[0] + user?.lastName[0]}</div>`;



const registerButton = document.getElementById('register');

registerButton?.addEventListener('click', () => {
  const password = document.querySelector('input.passwordRegisterForm')?.value;
  const firstName = document.querySelector('input.firstNameRegisterForm')?.value;
  const lastName = document.querySelector('input.lastNameRegisterForm')?.value;
  const email = document.querySelector('input.emailRegisterForm')?.value;

  localStorage.setItem(AUTHORIZATION, JSON.stringify({
    lastName,
    firstName,
    password,
    email
  }))
  userButton.innerHTML= `<div class="loggined">${JSON.parse(localStorage.getItem(AUTHORIZATION))?.firstName[0] + JSON.parse(localStorage.getItem(AUTHORIZATION))?.lastName[0] }</div>`;


})

const logregBox = document.querrySelection('.logreg-box');
const loginLink = document.querrySelection('.login-link');
const registerLink = document.querrySelection('.register-box');

registerLink.addEventListener('click', () => {
    logregBox.classList.add('active');
});

loginLink.addEventListener('click', () => {
    logregBox.classList.remove('active');
});
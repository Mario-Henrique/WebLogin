const card: Element | null = document.querySelector('.card');
const registerLink: Element | null = document.querySelector('.register-link');
const loginLink: Element | null = document.querySelector('.login-link');
const btLoginPopup: Element | null = document.getElementById('btLoginPopup');
const btClosePopup: Element | null = document.getElementById('btClosePopup');

registerLink?.addEventListener('click', ():void => {
    card?.classList.add('active');
});

loginLink?.addEventListener('click', ():void => {
    card?.classList.remove('active');
});

btLoginPopup?.addEventListener('click', ():void => {
    card?.classList.add('active-popup');
});

btClosePopup?.addEventListener('click', ():void => {
    card?.classList.remove('active-popup');
});
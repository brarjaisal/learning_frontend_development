const getNewsletter = document.querySelector('.get-newsletter');
const closeIcon = document.querySelector('.close-icon');
const popup = document.querySelector('.popup');
const subscribeButton = document.querySelector('.submit-btn ');
// const overlay = document.querySelector('.overlay');
// debugger
getNewsletter.addEventListener('click', () => {
    popup.classList.add('popup-open');
    console.log('get newsletter clicked');
});

closeIcon.addEventListener('click', () => {
    popup.classList.remove('popup-open');
    console.log('close icon clicked');
});

// overlay.addEventListener('click', () => {
//     popup.classList.remove('popup-open');
// });

subscribeButton.addEventListener('click', (e) => {
    if (!document.querySelector('#email-input').value.includes('@')) {
        e.preventDefault();
        alert('Please enter a valid email address');
        return;
    }
    popup.classList.remove('popup-open');
});
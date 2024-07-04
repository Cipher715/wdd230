const main = document.querySelector('#main');
const darkButton = document.querySelector('#darkButton');

darkButton.addEventListener('click', () => {
    main.classList.toggle('dark');
})


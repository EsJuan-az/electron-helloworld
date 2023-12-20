const image = document.querySelector('img');
let i = 360;
image.addEventListener('click', () => {
    image.style.rotate = i + 'deg';
    i += 360;
});
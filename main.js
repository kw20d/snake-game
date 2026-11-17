import { snake } from './snake.js';

const canvas = document.querySelector('#main-canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

document.fonts.load('40px VT323')
    .then(() => snake.start(canvas))
    .catch(error => {
        console.error('Font loading failed:', error);
        snake.start(canvas);
    });

document.addEventListener('keydown', event => {
    if (event.key.startsWith('Arrow')) {
        event.preventDefault();
    }

    snake.onKey(event.type, event.key);
});

document.addEventListener('keyup', event => {
    snake.onKey(event.type, event.key);
});